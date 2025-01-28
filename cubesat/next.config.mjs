/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export for GitHub Pages
  basePath: '/your-repo-name', // Replace 'your-repo-name' with your repository name
  images: {
    unoptimized: true, // Required for GitHub Pages since server-side optimization isn't supported
  },
};

module.exports = nextConfig;
