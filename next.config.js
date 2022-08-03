/** @type {import('next').NextConfig} */
require("dotenv").config({ path: `.env.local` });

const nextConfig = {
  reactStrictMode: true,
  ssr:true
}

// webpack
module.exports = {
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  }
}


module.exports = nextConfig



