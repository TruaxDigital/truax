import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog-data";
import BlogPostContent from "./blog-post-content";

// Re-check hourly so a scheduled post goes live on its publish date,
// and allow slugs that were not built at deploy time.
export const revalidate = 3600;
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Truax Marketing",
    };
  }

  const description = post.excerpt.replace(/\*+/g, "").replace(/\s+/g, " ").trim();

  return {
    title: post.title,
    description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      url: `https://truaxmarketing.com/insights/${post.slug}`,
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
    alternates: {
      canonical: `https://truaxmarketing.com/insights/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Strip stray markdown asterisks from the excerpt before it is shown or used in schema
  const cleanExcerpt = post.excerpt.replace(/\*+/g, "").replace(/\s+/g, " ").trim();

  // Imported WordPress posts mark section headings as ****Heading****. Turn them into real H2s.
  const cleanContent = post.content.replace(/\*\*\*\*(.+?)\*\*\*\*/g, "\n\n## $1\n\n");

  return <BlogPostContent post={{ ...post, excerpt: cleanExcerpt, content: cleanContent }} />;
}
