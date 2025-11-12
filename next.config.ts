import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
        pathname: '/maps/api/streetview/**',
      },
      {
        protocol: 'https',
        hostname: 'staticmap.openstreetmap.de',
      },
      {
        protocol: 'https',
        hostname: 'tile.openstreetmap.org',
      },
      {
        protocol: 'https',
        hostname: 'server.arcgisonline.com',
        pathname: '/ArcGIS/rest/services/**',
      },
      {
        protocol: 'https',
        hostname: 'static-maps.yandex.ru',
      },
      {
        protocol: 'https',
        hostname: 'catalog.api.2gis.com',
      },
      {
        protocol: 'https',
        hostname: 'tile2.maps.2gis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react', 'phosphor-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
