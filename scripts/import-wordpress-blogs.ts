import * as fs from 'fs';
import * as path from 'path';
import { fal } from '@fal-ai/client';

// Configure fal client
fal.config({
  credentials: process.env.FAL_KEY,
});

interface WPPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  tags: string[];
  author: string;
}

// Existing slugs from blog-data.ts (to avoid duplicates)
const existingSlugs = new Set([
  "questioning-boutique-digital-marketing-agency",
  "why-dc-clients-arent-finding-you-on-digital",
  "how-to-detect-hosting-is-hurting-conversion",
  "tips-for-choosing-a-wordpress-development-agency",
  "launching-managed-web-host-setup",
  "gaps-in-your-digital-marketing-strategy",
  "ad-spending-for-nonprofits-in-washington-dc",
  "wordpress-agency-slowing-site-down",
  "guide-to-managing-hosting-headaches-during-site-upgrades",
  "why-website-leads-vanish",
  "why-boutique-marketing-agencies-misuse-ai",
  "how-to-avoid-diy-web-maintenance",
  "fixing-ad-account-bloat-in-your-linkedin-campaigns",
  "case-hiring-fractional-cmo-right-now",
  "good-encryption-isnt-tech-team-job-anymore",
  "guide-integrated-digital-strategy-small-teams",
  "understanding-demand-generation-campaigns-stalling",
  "steps-clean-up-old-site-data-before-seo-work",
  "why-social-media-ad-spend-isnt-returning-leads",
  "pick-managed-wordpress-hosting-setup-doesnt-break",
  "social-media-ads-arent-converting-and-how-to-fix-it",
  "solving-content-distribution-problems-for-multi-channel-marketing",
  "dc-business-isnt-showing-up-local-searches",
  "ai-marketing-problems-prepare-2026",
  "fixing-frustrating-wordpress-errors-managed-hosting",
  "ppc-campaigns-wasting-money-stop",
  "holiday-marketing-problems-solved-with-timely-digital-strategies",
  "fix-outdated-website-design-without-starting-over",
  "using-ai-fix-declining-engagement-rates-content-marketing",
  "solving-wordpress-speed-issues-specialized-managed-hosting",
  "why-your-marketing-channels-arent-working-together-and-how-to-fix-it",
  "troubleshooting-failed-linkedin-ad-campaigns-benchmark-data",
  "solving-brand-inconsistency-issues-with-digital-integration",
  "overcoming-donor-engagement-challenges-for-dc-nonprofits-online",
  "stop-website-loading-problems-better-web-hosting",
  "fixing-customer-targeting-issues-ai-powered-segmentation",
  "what-to-do-wordpress-site-crashes-hosting-solutions",
  "local-seo-problems-dc-small-businesses-face-and-how-to-solve-them",
  "rebuild-when-optimize-wordpress-website",
  "breaking-down-silos-marketing-integrated-strategy",
  "troubleshooting-poor-social-media-ad-performance-with-ai-tools",
  "fixing-lead-generation-problems",
  "how-to-identify-digital-marketing-trends",
  "clearing-up-ai-confusion-for-small-businesses",
  "why-website-downtime-happens-and-how-managed-hosting-prevents-it",
  "transforming-campaigns-with-ai-implementation",
  "protect-customer-data-with-advanced-encryption-services",
  "signs-business-needs-a-fractional-cmo",
  "digital-marketing-trends-investment-in-2025",
  "what-linkedin-ad-benchmarks-actually-matter",
  "how-to-fix-disconnected-marketing-channels",
  "which-managed-wordpress-hosting-features-matter-most-for-dc-businesses",
  "budget-friendly-ai-in-marketing-strategy",
  "when-to-hire-fractional-cmo-services",
  "security-vulnerabilities-in-business-digital-marketing",
  "website-issues-regular-maintenance",
  "what-digital-marketing-trends-will-impact-your-business-most-in-2025",
  "fix-low-engagement-rates-digital-strategies",
  "boost-brand-with-ai-image-recognition",
  "small-brands-compete-with-ai",
  "using-ai-to-analyze-customer",
  "digital-marketing-trends-of-2025",
  "ways-ai-can-personalize-customer-experiences",
  "ai-in-content-creation-benefits",
  "predictive-analytics-matter-in-marketing",
  "improve-website-with-seo-ai-tools-2",
  "ai-powered-email-marketing-to-ensure-success",
  "boost-customer-service-with-chatbots",
  "ai-tools-simplify-digital-marketing-tasks",
  "ai-social-media-marketing",
  "ai-growth-strategies",
  "better-website-traffic-ticks",
  "ai-in-social-media-marketing",
  "understanding-ai-powered-customer-insights",
  "improve-website-with-seo-ai-tools",
  "benefits-of-ai-in-content-creation",
  "why-predictive-analytics-matter-in-marketing",
  "top-digital-marketing-trends",
  "boost-your-nonprofit-with-digital-marketing",
  "marketing-tools-for-small-businesses",
  "harnessing-ai-for-personalized-digital-marketing-campaigns-in-2024",
  "ai-tools-for-marketing-every-small-business",
  "content-marketing-ai-trends-to-watch",
  "ai-strategies-for-social-media-marketing",
  "small-business-marketing-ai-tools",
  "ai-personalization-customer-experience",
  "ai-trends-in-nonprofit-marketing",
  "nonprofit-donor-communication-ai-strategies",
  "what-to-expect-seo-consultants",
  "machine-learning-in-online-ad-optimization",
  "investment-in-high-quality-content",
  "essential-digital-marketing-trends-to-watch-this-year",
  "true-cost-of-diy-seo",
  "ai-in-seo-tools-and-tips-to-boost-your-strategy",
  "seo-budgeting-tips-to-maximize-roi-in-2024",
  "small-business-marketing-top-ai-tools",
  "seo-costs-for-small-businesses-explained",
  "ai-driven-text-generation-transform-content-marketing-for-small-businesses",
  "influencer-marketing-strategies",
  "ai-marketing-for-small-businesses",
  "ai-predictive-analytics-for-small-businesses",
  "ai-powered-chatbots",
  "ai-driven-content-generation",
  "the-future-of-email-marketing-guide",
  "unlocking-the-power-of-visual-content-marketing",
  "ai-driven-email-marketing",
  "unleash-ai-driven-predictive-analytics-to-maximize-marketing-success",
  "ai-driven-sentiment-analysis",
  "utilizing-ai-chatbots-to-enhance-customer-engagement",
  "customer-experience-with-ai-for-small-business",
  "power-of-social-media-listening",
  "iai-generated-content-digital-marketing-strategies",
  "skyrocket-your-small-business-growth",
  "power-of-ai-driven-predictive-analytics",
  "boost-your-social-media-success",
  "semantic-seo-online-visibility",
  "exploring-ai-powered-chatbots",
  "boosting-engagement-with-ai-powered-personalization-techniques",
  "optimize-your-content-strategy",
  "email-marketing-campaigns-with-ai-for-small-businesses",
  "ai-chatbots-guide-small-businesses-nonprofits",
  "ai-personalization-customer-engagement",
  "leveraging-ai-enhanced-email-marketing-for-small-business",
  "boost-digital-marketing-with-ai-powered-content",
  "boost-your-small-business-social-media-strategy-with-ai-driven-analytics-and-insights",
  "ai-chatbots-for-small-businesses",
  "ai-powered-social-media-marketing-for-business",
  "ai-enhanced-customer-journey-mapping-revolutionizing-small-business-marketing-strategies",
  "ai-powered-digital-marketing-for-businesses",
  "harnessing-ai-driven-video-marketing-for-small-business",
  "boost-your-nonprofits-social-media-presence-with-ai-based-techniques",
  "frequently-asked-questions-about-using-ai-in-digital-marketing-for-small-businesses",
  "embrace-ai-powered-programmatic-advertising-for-small-business-success",
]);

function parseXML(xmlContent: string): WPPost[] {
  const posts: WPPost[] = [];
  
  // Match all <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;
  
  while ((match = itemRegex.exec(xmlContent)) !== null) {
    const itemContent = match[1];
    
    // Check if it's a post (not page, attachment, etc.)
    const postTypeMatch = itemContent.match(/<wp:post_type><!\[CDATA\[(.*?)\]\]><\/wp:post_type>/);
    if (!postTypeMatch || postTypeMatch[1] !== 'post') continue;
    
    // Check status is publish
    const statusMatch = itemContent.match(/<wp:status><!\[CDATA\[(.*?)\]\]><\/wp:status>/);
    if (!statusMatch || statusMatch[1] !== 'publish') continue;
    
    // Extract title
    const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
    const title = titleMatch ? titleMatch[1] : '';
    
    // Extract slug
    const slugMatch = itemContent.match(/<wp:post_name><!\[CDATA\[(.*?)\]\]><\/wp:post_name>/);
    const slug = slugMatch ? slugMatch[1] : '';
    
    // Skip if already exists
    if (existingSlugs.has(slug)) {
      console.log(`Skipping existing: ${slug}`);
      continue;
    }
    
    // Extract content
    const contentMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/);
    let content = contentMatch ? contentMatch[1] : '';
    
    // Extract excerpt
    const excerptMatch = itemContent.match(/<excerpt:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/excerpt:encoded>/);
    const excerpt = excerptMatch ? excerptMatch[1] : '';
    
    // Extract date
    const dateMatch = itemContent.match(/<wp:post_date><!\[CDATA\[(.*?)\]\]><\/wp:post_date>/);
    const publishedAt = dateMatch ? dateMatch[1].split(' ')[0] : '';
    
    // Extract category
    const categoryMatch = itemContent.match(/<category domain="category" nicename="[^"]*"><!\[CDATA\[(.*?)\]\]><\/category>/);
    const category = categoryMatch ? categoryMatch[1] : 'Digital Strategy';
    
    // Extract tags
    const tags: string[] = [];
    const tagRegex = /<category domain="post_tag" nicename="[^"]*"><!\[CDATA\[(.*?)\]\]><\/category>/g;
    let tagMatch;
    while ((tagMatch = tagRegex.exec(itemContent)) !== null) {
      tags.push(tagMatch[1]);
    }
    
    // Extract author
    const authorMatch = itemContent.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/);
    const author = authorMatch ? authorMatch[1] : 'Aaron Truax';
    
    if (title && slug && content) {
      posts.push({
        title,
        slug,
        content,
        excerpt,
        publishedAt,
        category,
        tags,
        author,
      });
    }
  }
  
  return posts;
}

function stripWPBlocks(content: string): string {
  // Remove WordPress block comments
  let cleaned = content.replace(/<!-- \/?wp:[^>]*-->/g, '');
  
  // Convert HTML to plain text for excerpt
  cleaned = cleaned.replace(/<[^>]+>/g, ' ');
  cleaned = cleaned.replace(/&nbsp;/g, ' ');
  cleaned = cleaned.replace(/&amp;/g, '&');
  cleaned = cleaned.replace(/\s+/g, ' ');
  
  return cleaned.trim();
}

function generateExcerpt(content: string, maxLength = 160): string {
  const plainText = stripWPBlocks(content);
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength).trim() + '...';
}

function convertContentToMarkdown(html: string): string {
  let md = html;
  
  // Remove WP blocks
  md = md.replace(/<!-- \/?wp:[^>]*-->/g, '');
  
  // Convert headings
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n');
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n');
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n');
  
  // Convert paragraphs
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n');
  
  // Convert lists
  md = md.replace(/<ul[^>]*>/gi, '\n');
  md = md.replace(/<\/ul>/gi, '\n');
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  
  // Convert bold/strong
  md = md.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b>(.*?)<\/b>/gi, '**$1**');
  
  // Convert italic/em
  md = md.replace(/<em>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i>(.*?)<\/i>/gi, '*$1*');
  
  // Convert links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  
  // Remove images (we'll use generated ones)
  md = md.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '');
  md = md.replace(/<img[^>]*>/gi, '');
  
  // Clean up
  md = md.replace(/&nbsp;/g, ' ');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/\n{3,}/g, '\n\n');
  
  return md.trim();
}

function mapCategory(wpCategory: string): string {
  const categoryMap: Record<string, string> = {
    'Digital Strategy': 'Digital Strategy',
    'SEO': 'SEO',
    'Web Development': 'Web Development',
    'AI & Automation': 'AI & Automation',
    'Demand Generation': 'Demand Generation',
    'Local SEO': 'Local SEO',
    'Content Marketing': 'Content Marketing',
    'Social Media': 'Social Media',
    'Email Marketing': 'Email Marketing',
    'Analytics': 'Analytics',
  };
  
  // Try to match or default
  for (const [key, value] of Object.entries(categoryMap)) {
    if (wpCategory.toLowerCase().includes(key.toLowerCase())) {
      return value;
    }
  }
  
  return 'Digital Strategy';
}

function mapAuthor(wpAuthor: string): { name: string; role: string; avatar: string } {
  if (wpAuthor === 'aarontruax' || wpAuthor.includes('aaron')) {
    return {
      name: 'Aaron Truax',
      role: 'Founder & Digital Strategist',
      avatar: '/images/team/aaron-truax.jpg',
    };
  }
  return {
    name: 'Truax Marketing Team',
    role: 'Digital Marketing Experts',
    avatar: '/images/team/truax-team.jpg',
  };
}

function generateImagePrompt(title: string, category: string): string {
  return `Professional blog header image for article titled "${title}". Modern digital marketing theme with ${category.toLowerCase()} focus. Abstract, minimalist design with blue and cyan color scheme (#27AAE1, #2B3990). Dark navy background. Corporate tech aesthetic. No text. High quality.`;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function generateBlogPostCode(post: WPPost, imageUrl: string, index: number): string {
  const author = mapAuthor(post.author);
  const category = mapCategory(post.category);
  const excerpt = post.excerpt || generateExcerpt(post.content);
  const content = convertContentToMarkdown(post.content);
  
  // Format for existing blog-data.ts structure
  return `  {
    id: "${post.slug}",
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    excerpt: "${excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ').substring(0, 200)}",
    content: \`${content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
    publishedAt: "${formatDate(post.publishedAt)}",
    author: "${author.name}",
    category: "${category}",
    tags: [${post.tags.length > 0 ? post.tags.map(t => `"${t}"`).join(',') : `"${category}"`}],
    featuredImage: "${imageUrl}"
  },`;
}

async function main() {
  // Read XML file
  const xmlPath = process.argv[2];
  if (!xmlPath) {
    console.error('Usage: npx tsx scripts/import-wordpress-blogs.ts <path-to-xml>');
    process.exit(1);
  }
  
  const xmlContent = fs.readFileSync(xmlPath, 'utf-8');
  console.log('Parsing WordPress XML...');
  
  const posts = parseXML(xmlContent);
  console.log(`Found ${posts.length} new posts to import`);
  
  // Generate blog post code (images will be generated later)
  const blogPostCodes: string[] = [];
  const imagePrompts: string[] = [];
  
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    console.log(`Processing ${i + 1}/${posts.length}: ${post.title}`);
    
    // Generate image prompt for later
    const prompt = generateImagePrompt(post.title, post.category);
    imagePrompts.push(`${post.slug}: ${prompt}`);
    
    // Generate code with placeholder image path
    const code = generateBlogPostCode(post, `/images/blog/${post.slug}.jpg`, i);
    blogPostCodes.push(code);
  }
  
  // Output blog posts to file
  const outputPath = path.join(process.cwd(), 'scripts', 'imported-blogs.ts');
  const output = `// Imported WordPress blog posts
// Add these to lib/blog-data.ts

export const importedBlogPosts = [
${blogPostCodes.join('\n')}
];
`;
  
  fs.writeFileSync(outputPath, output);
  console.log(`\nImported ${posts.length} blog posts to ${outputPath}`);
  
  // Output image prompts
  const promptsPath = path.join(process.cwd(), 'scripts', 'image-prompts.txt');
  fs.writeFileSync(promptsPath, imagePrompts.join('\n\n'));
  console.log(`Image prompts saved to ${promptsPath}`);
}

main().catch(console.error);
