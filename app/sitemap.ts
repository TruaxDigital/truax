import { MetadataRoute } from 'next'
import { getAllBlogPosts } from '@/lib/blog-data'

// Rebuild hourly so scheduled posts enter the sitemap on their publish date
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://truaxmarketing.com'

  // Static pages
  const staticPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/web-design-development`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/search-engine-optimization`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/search-engine-optimization/seo-pricing`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/services/digital-strategy`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/fractional-cmo`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/demand-generation`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/managed-hosting`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/ai-enablement`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/ai-agents`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/ai-agents/pricing`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/insights`, changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/meet`, changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  // Blog posts, dated by their real publish date
  const blogPages = getAllBlogPosts().map((post) => {
    const published = new Date(post.publishedAt)
    return {
      url: `${baseUrl}/insights/${post.slug}`,
      ...(isNaN(published.getTime()) ? {} : { lastModified: published }),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  return [...staticPages, ...blogPages]
}
