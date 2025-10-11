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
}

module.exports = nextConfig

