import { type NextRequest, NextResponse } from "next/server";
import * as fal from "@fal-ai/serverless-client";
import { put } from "@vercel/blob";
import { getPostBySlug } from "@/lib/blog-data";
import { generateImagePrompt, generateQuickPrompt } from "@/lib/blog-image-prompt";

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { slug, useQuickPrompt = false } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    // Get the blog post
    const post = getPostBySlug(slug);
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Generate the prompt based on post content
    const prompt = useQuickPrompt
      ? generateQuickPrompt(post)
      : generateImagePrompt(post);

    // Generate image using fal AI flux/schnell model
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt,
        image_size: "landscape_16_9",
        num_inference_steps: 4,
        num_images: 1,
      },
    });

    // Extract the image URL from the result
    const falImageUrl = (result as { images?: { url: string }[] }).images?.[0]?.url;

    if (!falImageUrl) {
      throw new Error("No image generated from fal AI");
    }

    // Fetch the generated image
    const imageResponse = await fetch(falImageUrl);
    if (!imageResponse.ok) {
      throw new Error("Failed to fetch generated image");
    }

    const imageBuffer = await imageResponse.arrayBuffer();

    // Upload to Vercel Blob
    const blob = await put(`blog-images/${slug}.jpg`, imageBuffer, {
      access: "public",
      contentType: "image/jpeg",
    });

    return NextResponse.json({
      success: true,
      slug,
      imageUrl: blob.url,
      prompt,
    });
  } catch (error) {
    console.error("Error generating blog image:", error);
    return NextResponse.json(
      {
        error: "Failed to generate image",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check if an image exists for a post
export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  const post = getPostBySlug(slug);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  // Return the post info and current image
  return NextResponse.json({
    slug,
    title: post.title,
    category: post.category,
    currentImage: post.featuredImage,
  });
}
