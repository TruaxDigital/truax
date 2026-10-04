/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Send www to the bare domain so Google sees one version of every page
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.truaxmarketing.com' }],
        destination: 'https://truaxmarketing.com/:path*',
        permanent: true,
      },
      // Old WordPress blog URLs now live under /insights
      { source: '/blog', destination: '/insights', permanent: true },
      { source: '/blog/:slug', destination: '/insights/:slug', permanent: true },
      // Old outreach landing page path
      { source: '/your-site', destination: '/your-new-website', permanent: true },
    ]
  },
}

export default nextConfig
