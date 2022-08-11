require("dotenv").config({ path: `.env.local` });
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  ssr:true,
  images: {
    domains: ['localhost','cutewallpaper.org','media.nature.com','images.squarespace-cdn.com'],
  },
}

// webpack
module.exports = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
}


module.exports = nextConfig



