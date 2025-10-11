/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Enhanced caching: immutable for assets, no-store for HTML
  async headers() {
    return [
      {
        source: '/(.*\\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2))',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, must-revalidate' },
        ],
      },
    ]
  },
}

module.exports = nextConfig

