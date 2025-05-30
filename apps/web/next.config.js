/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode
  reactStrictMode: true,
  // Disable powered by header
  poweredByHeader: false,
  // Compression
  compress: true,
  // Images configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: false,
  },
  // ESLint configuration
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Transpile packages from workspace
  transpilePackages: ['@bluecollar/ui', '@bluecollar/db'],
}

module.exports = nextConfig 