import type { Metadata } from 'next'
import { Work_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { JsonLd, organizationSchema, websiteSchema, localBusinessSchema } from '@/components/json-ld'
import './globals.css'

const workSans = Work_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://truaxmarketing.com'),
  title: {
    default: 'Truax Marketing Solutions | Digital Marketing with Heart',
    template: '%s | Truax Marketing Solutions',
  },
  description: 'A results-focused, boutique marketing agency specializing in AI implementation, CRM integrations, SEO/SEM, WordPress development, and social media.',
  keywords: ['digital marketing', 'SEO', 'AI marketing', 'web development', 'Portland marketing agency', 'fractional CMO', 'demand generation'],
  authors: [{ name: 'Aaron Truax', url: 'https://truaxmarketing.com/about' }],
  creator: 'Truax Marketing Solutions',
  publisher: 'Truax Marketing Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://truaxmarketing.com',
    siteName: 'Truax Marketing Solutions',
    title: 'Truax Marketing Solutions | Digital Marketing with Heart',
    description: 'A results-focused, boutique marketing agency specializing in AI implementation, CRM integrations, SEO/SEM, WordPress development, and social media.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1024,
        height: 1024,
        alt: 'Truax Marketing Solutions - Digital Marketing with Heart',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truax Marketing Solutions | Digital Marketing with Heart',
    description: 'A results-focused, boutique marketing agency specializing in AI implementation, CRM integrations, SEO/SEM, WordPress development, and social media.',
    images: ['/og-image.jpg'],
    creator: '@truaxmarketing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://truaxmarketing.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${workSans.variable} ${geistMono.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
      <GoogleTagManager gtmId="GTM-N7VDVJB" />
      <GoogleAnalytics gaId="G-RLJ3LES45Y" />
    </html>
  )
}
