/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === 'production' ? 'https://chun-bae.github.io/Base64onNext.js/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
  }

export default nextConfig;
