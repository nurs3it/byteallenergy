/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  images: {
    unoptimized: true,
    domains: ['media.licdn.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
