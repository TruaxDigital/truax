"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogPost, getAllBlogPosts } from "@/lib/blog-data";
import { getBlogImageUrl } from "@/lib/blog-image-urls";
import { JsonLd, createArticleSchema, createBreadcrumbSchema } from "@/components/json-ld";

interface Props {
  post: BlogPost;
}

// Parse inline markdown (bold, italic, links)
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Check for bold (**text**)
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Check for italic (*text*)
    const italicMatch = remaining.match(/(?<!\*)\*(?!\*)(.+?)(?<!\*)\*(?!\*)/);
    // Check for links [text](url)
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

    // Find earliest match
    const matches = [
      boldMatch ? { type: 'bold', match: boldMatch, index: remaining.indexOf(boldMatch[0]) } : null,
      italicMatch ? { type: 'italic', match: italicMatch, index: remaining.indexOf(italicMatch[0]) } : null,
      linkMatch ? { type: 'link', match: linkMatch, index: remaining.indexOf(linkMatch[0]) } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0 || matches[0]!.index === -1) {
      parts.push(remaining);
      break;
    }

    const earliest = matches[0]!;
    
    // Add text before the match
    if (earliest.index > 0) {
      parts.push(remaining.slice(0, earliest.index));
    }

    // Add the formatted element
    if (earliest.type === 'bold') {
      parts.push(<strong key={key++} className="text-white font-semibold">{earliest.match![1]}</strong>);
      remaining = remaining.slice(earliest.index + earliest.match![0].length);
    } else if (earliest.type === 'italic') {
      parts.push(<em key={key++}>{earliest.match![1]}</em>);
      remaining = remaining.slice(earliest.index + earliest.match![0].length);
    } else if (earliest.type === 'link') {
      parts.push(
        <a key={key++} href={earliest.match![2]} className="text-[#27AAE1] hover:underline" target="_blank" rel="noopener noreferrer">
          {earliest.match![1]}
        </a>
      );
      remaining = remaining.slice(earliest.index + earliest.match![0].length);
    }
  }

  return parts;
}

export default function BlogPostContent({ post }: Props) {
  const allPosts = getAllBlogPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
  const prevPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    publishedAt: post.publishedAt,
    author: post.author,
    category: post.category,
  });

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  // Convert markdown-style content to properly formatted HTML
  const formatContent = (content: string) => {
    const blocks = content.split("\n\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i].trim();
      if (!block) continue;

      // H2 Headings
      if (block.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-2xl font-semibold mt-12 mb-4 text-white">
            {parseInlineMarkdown(block.replace("## ", ""))}
          </h2>
        );
        continue;
      }

      // H3 Headings
      if (block.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold mt-8 mb-3 text-white">
            {parseInlineMarkdown(block.replace("### ", ""))}
          </h3>
        );
        continue;
      }

      // Numbered lists (1. 2. 3.)
      if (/^\d+\.\s/.test(block)) {
        const items = block.split("\n").filter(line => /^\d+\.\s/.test(line));
        elements.push(
          <ol key={key++} className="list-decimal list-outside ml-6 space-y-3 my-6 text-gray-300">
            {items.map((item, i) => (
              <li key={i} className="pl-2">
                {parseInlineMarkdown(item.replace(/^\d+\.\s/, ""))}
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Unordered lists with dashes
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter(line => line.startsWith("- "));
        elements.push(
          <ul key={key++} className="space-y-3 my-6 text-gray-300">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27AAE1] mt-2.5 flex-shrink-0" />
                <span>{parseInlineMarkdown(item.replace("- ", ""))}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Checklist
      if (block.includes("- [ ]")) {
        const items = block.split("\n").filter(line => line.includes("- [ ]"));
        elements.push(
          <ul key={key++} className="space-y-3 my-6">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <div className="w-5 h-5 mt-0.5 border-2 border-[#27AAE1] rounded flex-shrink-0" />
                <span>{parseInlineMarkdown(item.replace("- [ ]", "").trim())}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Regular paragraphs
      elements.push(
        <p key={key++} className="text-gray-300 leading-relaxed my-5">
          {parseInlineMarkdown(block)}
        </p>
      );
    }

    return elements;
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="min-h-screen bg-[#0a0a12]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#27AAE1]/10 via-[#2B3990]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#27AAE1] transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            <span className="text-sm font-medium text-[#27AAE1] bg-[#27AAE1]/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <User className="h-4 w-4" />
              {post.author}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            {post.excerpt}
          </motion.p>
        </div>
      </section>

      {/* Featured Image */}
      {(() => {
        const imageUrl = getBlogImageUrl(post.slug, post.featuredImage);
        return imageUrl && (
          <section className="px-6 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#262466]">
                <img 
                  src={imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </section>
        );
      })()}

      {/* Content */}
      <section className="py-8 px-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="prose prose-invert prose-lg max-w-none">
            {formatContent(post.content)}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-[#262466]">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-gray-500" />
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-sm text-gray-400 bg-[#0f0f1a] border border-[#262466] px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {prevPost && (
              <Link href={`/blog/${prevPost.slug}`} className="group">
                <div className="p-6 rounded-xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-all">
                  <span className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                    <ArrowLeft className="h-3 w-3" />
                    Previous
                  </span>
                  <p className="font-medium group-hover:text-[#27AAE1] transition-colors line-clamp-2">
                    {prevPost.title}
                  </p>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto">
                <div className="p-6 rounded-xl bg-[#0f0f1a] border border-[#262466] hover:border-[#27AAE1]/50 transition-all text-right">
                  <span className="text-sm text-gray-500 flex items-center justify-end gap-1 mb-2">
                    Next
                    <ArrowRight className="h-3 w-3" />
                  </span>
                  <p className="font-medium group-hover:text-[#27AAE1] transition-colors line-clamp-2">
                    {nextPost.title}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-[#2B3990]/20 to-[#27AAE1]/10 border border-[#262466]"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
              Need help with your marketing?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you grow your business with proven digital marketing strategies.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#27AAE1] hover:bg-[#27AAE1]/90 text-black font-medium px-8">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

        <Footer />
      </main>
    </>
  );
}
