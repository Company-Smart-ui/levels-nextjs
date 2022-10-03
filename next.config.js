/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.vercel.com','www.levelshealth.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig


