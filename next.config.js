/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable compression for better performance
  compress: true,
  // Strict mode for better development experience
  reactStrictMode: true,
  // Power features for better performance
  poweredByHeader: false,
};

module.exports = nextConfig;
