/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
