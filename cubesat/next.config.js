/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/UCI_CubeSat' : '',
  images: {
    unoptimized: true, // Required for GitHub Pages since server-side optimization isn't supported
  },
  trailingSlash: true,
};

module.exports = nextConfig;
