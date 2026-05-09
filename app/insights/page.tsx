"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllBlogPosts, getAllCategories } from "@/lib/blog-data";
import { getBlogImageUrl } from "@/lib/blog-image-urls";
import { useState, useMemo } from "react";

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filteredPosts = useMemo(() => {
    let posts = allPosts;
    
    // Filter by category
    if (selectedCategory) {
      posts = posts.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)
      );
    }
    
    return posts;
  }, [allPosts, selectedCategory, searchQuery]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + POSTS_PER_PAGE);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setVisibleCount(POSTS_PER_PAGE);
  };

  return (
    <main className="min-h-screen bg-[#0a0a12]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#27AAE1]/10 via-[#2B3990]/5 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#27AAE1] font-medium mb-4 tracking-wide"
          >
            Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight leading-[1.1]"
          >
            Digital Marketing{" "}
            <span className="text-[#27AAE1]">Insights</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl leading-relaxed"
          >
            Stay informed on the latest trends, strategies, and best practices in digital marketing.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-6 pb-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search posts by title, topic, or tag..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className="w-full pl-12 pr-10 py-3 bg-[#0f0f1a] border border-[#262466] rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#27AAE1]/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-[#27AAE1] text-black shadow-lg shadow-[#27AAE1]/25"
                  : "bg-[#0f0f1a] border border-[#262466] text-gray-400 hover:border-[#27AAE1]/50 hover:text-white hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#27AAE1]/10"
              }`}
            >
              All Posts
            </button>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#27AAE1] text-black shadow-lg shadow-[#27AAE1]/25"
                    : "bg-[#0f0f1a] border border-[#262466] text-gray-400 hover:border-[#27AAE1]/50 hover:text-white hover:bg-[#27AAE1]/10 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#27AAE1]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results count and clear filters */}
          {(searchQuery || selectedCategory) && (
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-400">
                {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} found
              </span>
              <button
                onClick={handleClearFilters}
                className="text-[#27AAE1] hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group rounded-2xl bg-[#0f0f1a] border border-[#262466] overflow-hidden hover:border-[#27AAE1]/50 transition-all"
              >
                {/* Featured Image */}
                <Link href={`/insights/${post.slug}`}>
                  <div className="aspect-video bg-gradient-to-br from-[#2B3990]/40 to-[#27AAE1]/20 relative overflow-hidden">
                    {(() => {
                      const imageUrl = getBlogImageUrl(post.slug, post.featuredImage);
                      return imageUrl ? (
                        <img 
                          src={imageUrl} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-xl bg-[#27AAE1]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Tag className="h-6 w-6 text-[#27AAE1]" />
                          </div>
                        </div>
                      );
                    })()}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#0f0f1a] to-transparent" />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium text-[#27AAE1] bg-[#27AAE1]/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1" suppressHydrationWarning>
                      <Calendar className="h-3 w-3" />
                      {post.publishedAt}
                    </span>
                  </div>
                  <Link href={`/insights/${post.slug}`}>
                    <h2 className="text-lg font-semibold mb-3 group-hover:text-[#27AAE1] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <Link href={`/insights/${post.slug}`}>
                    <span className="inline-flex items-center text-sm text-[#27AAE1] font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More / No Results */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[#262466]/30 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-300 mb-2">No posts found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
              <Button
                onClick={handleClearFilters}
                variant="outline"
                className="border-[#262466] hover:bg-[#262466]/20"
              >
                Clear all filters
              </Button>
            </div>
          ) : hasMorePosts ? (
            <div className="text-center pt-12">
              <Button
                onClick={handleLoadMore}
                variant="outline"
                size="lg"
                className="border-[#262466] hover:bg-[#262466]/20 hover:border-[#27AAE1]/50"
              >
                Load More Posts
                <span className="ml-2 text-gray-500">
                  ({visibleCount} of {filteredPosts.length})
                </span>
              </Button>
            </div>
          ) : filteredPosts.length > POSTS_PER_PAGE && (
            <div className="text-center pt-8 text-gray-500 text-sm">
              Showing all {filteredPosts.length} posts
            </div>
          )}
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
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">Ready to grow?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              We are always looking for new partnerships that align with our mission. 
              Drop us a note and let us find a time to talk.
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
  );
}
