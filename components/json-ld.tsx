import Script from 'next/script'

interface JsonLdProps {
  data: Record<string, unknown>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="beforeInteractive"
    />
  )
}

// Organization schema for the whole site
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  '@id': 'https://truaxmarketing.com/#organization',
  name: 'Truax Marketing Solutions',
  alternateName: 'Truax Marketing',
  url: 'https://truaxmarketing.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://truaxmarketing.com/logo.png',
    width: 512,
    height: 512,
  },
  image: 'https://truaxmarketing.com/og-image.jpg',
  description: 'A boutique digital marketing agency specializing in AI implementation, SEO, web development, and strategic marketing for growing businesses.',
  email: 'hello@truaxmarketing.com',
  telephone: '+1-503-928-7386',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.5152,
    longitude: -122.6784,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Portland',
      containedInPlace: {
        '@type': 'State',
        name: 'Oregon',
      },
    },
    {
      '@type': 'Country',
      name: 'United States',
    },
  ],
  founder: {
    '@type': 'Person',
    name: 'Aaron Truax',
    jobTitle: 'Founder & CEO',
  },
  foundingDate: '2022',
  sameAs: [
    'https://www.linkedin.com/company/truax-marketing',
    'https://twitter.com/truaxmarketing',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Sales Agents',
          description: 'Automated lead qualification and outreach with AI-powered sales agents',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Search Engine Optimization',
          description: 'Technical SEO, content strategy, and local SEO services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Design & Development',
          description: 'Custom WordPress development and conversion-optimized websites',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fractional CMO',
          description: 'Part-time executive marketing leadership and strategy',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

// Website schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://truaxmarketing.com/#website',
  url: 'https://truaxmarketing.com',
  name: 'Truax Marketing Solutions',
  description: 'Digital marketing with heart',
  publisher: {
    '@id': 'https://truaxmarketing.com/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://truaxmarketing.com/blog?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

// Local business schema
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://truaxmarketing.com/#localbusiness',
  name: 'Truax Marketing Solutions',
  image: 'https://truaxmarketing.com/og-image.jpg',
  telephone: '+1-503-928-7386',
  email: 'hello@truaxmarketing.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Portland',
    addressRegion: 'OR',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.5152,
    longitude: -122.6784,
  },
  url: 'https://truaxmarketing.com',
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
}

// Service page schema generator
export function createServiceSchema(service: {
  name: string
  description: string
  url: string
  price?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://truaxmarketing.com${service.url}#service`,
    name: service.name,
    description: service.description,
    url: `https://truaxmarketing.com${service.url}`,
    provider: {
      '@id': 'https://truaxmarketing.com/#organization',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD',
      },
    }),
  }
}

// Blog post schema generator
export function createArticleSchema(post: {
  title: string
  description: string
  slug: string
  publishedAt: string
  author: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `https://truaxmarketing.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    url: `https://truaxmarketing.com/blog/${post.slug}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@id': 'https://truaxmarketing.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://truaxmarketing.com/blog/${post.slug}`,
    },
    articleSection: post.category,
  }
}

// FAQ schema generator
export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Breadcrumb schema generator
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://truaxmarketing.com${item.url}`,
    })),
  }
}
