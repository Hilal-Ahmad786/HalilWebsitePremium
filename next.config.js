// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    // Client-supplied images currently use a compatibility route while their final
    // WebP/AVIF pack is being prepared; direct delivery keeps those assets visible.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'istanbulotoexpert.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: '/kazali-arac-alim',
        destination: '/hizmetler/kazali-arac-alim',
        permanent: false,
      },
      {
        source: '/hasarli-arac-alim',
        destination: '/hizmetler/hasarli-arac-alim',
        permanent: false,
      },
      {
        source: '/pert-arac-alim',
        destination: '/hizmetler/pert-arac-alim',
        permanent: false,
      },
      {
        source: '/hurda-arac-alim',
        destination: '/hizmetler/hurda-arac-alim',
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;
