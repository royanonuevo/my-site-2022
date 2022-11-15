/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  mode: 'production'
})

const nextConfig = withPWA({
  reactStrictMode: false,
  swcMinify: true,
})

module.exports = nextConfig
