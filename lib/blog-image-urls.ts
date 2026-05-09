/**
 * Blog Image URL Mapping
 * Maps blog post slugs to their AI-generated image URLs in Vercel Blob
 * This file is updated by the batch generation script
 */

// Generated image URLs stored in Vercel Blob
// Key: post slug, Value: blob URL
export const generatedImageUrls: Record<string, string> = {
  // This will be populated by the batch generation script
  // Example: "my-blog-post-slug": "https://abcd1234.public.blob.vercel-storage.com/blog-images/my-blog-post-slug.jpg"
};

/**
 * Get the image URL for a blog post
 * Returns the AI-generated image if available, otherwise returns the fallback
 */
export function getBlogImageUrl(slug: string, fallbackUrl: string): string {
  return generatedImageUrls[slug] || fallbackUrl;
}

/**
 * Check if a post has a generated image
 */
export function hasGeneratedImage(slug: string): boolean {
  return slug in generatedImageUrls;
}

/**
 * Get all posts that have generated images
 */
export function getPostsWithGeneratedImages(): string[] {
  return Object.keys(generatedImageUrls);
}

/**
 * Get count of generated images
 */
export function getGeneratedImageCount(): number {
  return Object.keys(generatedImageUrls).length;
}
