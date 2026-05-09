/**
 * Blog Image Prompt Generator
 * Analyzes blog post content to generate contextually relevant image prompts
 */

import type { BlogPost } from "./blog-data";

// Brand keywords and their visual associations
const BRAND_VISUALS: Record<string, string> = {
  linkedin: "professional networking icons, LinkedIn-style blue accents, business connections",
  google: "search bar elements, colorful Google-style dots, analytics dashboards",
  facebook: "social media feed elements, Meta-style blue tones, community connections",
  instagram: "gradient purple-pink accents, photo grid layouts, visual storytelling",
  twitter: "tweet bubbles, bird silhouettes, real-time conversation elements",
  youtube: "video player elements, red accents, content creator visuals",
  tiktok: "short-form video elements, musical notes, trending visual style",
  email: "inbox interface elements, envelope icons, newsletter layouts",
  wordpress: "CMS dashboard elements, blogging interface, website builder visuals",
  seo: "search rankings visualization, keyword clouds, organic growth charts",
  chatgpt: "AI neural network patterns, conversation bubbles, futuristic tech elements",
  ai: "machine learning visualizations, neural networks, futuristic technology patterns",
  analytics: "data visualization charts, metrics dashboards, growth graphs",
  ppc: "ad campaign dashboards, click-through visualizations, budget meters",
  content: "editorial layouts, blog post previews, content calendar elements",
  video: "video production elements, play buttons, multimedia content",
  nonprofit: "community impact visuals, helping hands, mission-driven imagery",
  ecommerce: "shopping cart elements, product displays, conversion funnels",
};

// Category to visual style mapping
const CATEGORY_STYLES: Record<string, string> = {
  "Digital Strategy": "strategic planning visuals, roadmap diagrams, business growth",
  "Digital Excellence": "premium quality indicators, excellence badges, achievement visuals",
  "Digital Marketing": "multi-channel marketing visuals, campaign elements, audience targeting",
  "Demand Generation": "lead funnel visualizations, pipeline growth, conversion metrics",
  "Fractional CMO": "executive leadership visuals, strategic meetings, C-suite elements",
  "Managed Hosting": "server infrastructure, cloud computing, technical architecture",
  "Web Maintenance": "website management tools, maintenance dashboards, optimization",
  "SEO": "search engine rankings, keyword optimization, organic traffic growth",
  "Content Marketing": "editorial calendars, blog layouts, storytelling elements",
  "Email Marketing": "email campaign dashboards, inbox optimization, newsletter design",
  "Social Media": "social platform icons, engagement metrics, community building",
  "Paid Advertising": "ad campaign management, ROI visualization, targeting elements",
};

/**
 * Extract keywords from blog post title and content
 */
function extractKeywords(post: BlogPost): string[] {
  const text = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
  const keywords: string[] = [];

  // Check for brand mentions
  Object.keys(BRAND_VISUALS).forEach((brand) => {
    if (text.includes(brand)) {
      keywords.push(brand);
    }
  });

  // Add category-based keywords
  if (post.category) {
    keywords.push(post.category.toLowerCase());
  }

  // Add tag-based keywords
  post.tags.forEach((tag) => {
    keywords.push(tag.toLowerCase());
  });

  return [...new Set(keywords)]; // Remove duplicates
}

/**
 * Detect brand mentions and get visual associations
 */
function getBrandVisuals(keywords: string[]): string {
  const visuals: string[] = [];

  keywords.forEach((keyword) => {
    if (BRAND_VISUALS[keyword]) {
      visuals.push(BRAND_VISUALS[keyword]);
    }
  });

  return visuals.slice(0, 3).join(", "); // Limit to 3 brand visuals
}

/**
 * Get category-specific visual style
 */
function getCategoryStyle(category: string): string {
  return CATEGORY_STYLES[category] || CATEGORY_STYLES["Digital Strategy"];
}

/**
 * Generate a unique image prompt for a blog post
 */
export function generateImagePrompt(post: BlogPost): string {
  const keywords = extractKeywords(post);
  const brandVisuals = getBrandVisuals(keywords);
  const categoryStyle = getCategoryStyle(post.category);

  // Clean title for prompt (remove special characters)
  const cleanTitle = post.title
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .substring(0, 50);

  // Build the prompt
  let prompt = `Professional digital marketing illustration. Theme: ${cleanTitle}. `;
  prompt += `Visual style: ${categoryStyle}. `;

  if (brandVisuals) {
    prompt += `Include elements: ${brandVisuals}. `;
  }

  prompt += `Color palette: deep navy blue (#0a0a1a), cyan accent (#27AAE1), subtle purple gradients. `;
  prompt += `Modern, clean, corporate aesthetic with subtle geometric patterns. `;
  prompt += `Abstract business concept visualization. `;
  prompt += `High quality, photorealistic lighting, professional marketing imagery. `;
  prompt += `No text, no watermarks, no words, no letters.`;

  return prompt;
}

/**
 * Generate a shorter prompt for faster generation
 */
export function generateQuickPrompt(post: BlogPost): string {
  const keywords = extractKeywords(post);
  const primaryKeyword = keywords[0] || "digital marketing";

  return `Modern abstract digital marketing illustration about ${primaryKeyword}. Dark navy blue background (#0a0a1a) with cyan (#27AAE1) and purple accents. Clean geometric shapes, professional corporate aesthetic. No text, no watermarks.`;
}

/**
 * Get detected brands for a post (useful for logging/debugging)
 */
export function getDetectedBrands(post: BlogPost): string[] {
  const text = `${post.title} ${post.excerpt}`.toLowerCase();
  return Object.keys(BRAND_VISUALS).filter((brand) => text.includes(brand));
}
