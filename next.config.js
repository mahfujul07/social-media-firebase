/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "avatars.githubusercontent.com",
      "i.pinimg.com",
      "cdn5.vectorstock.com",
      "yt3.ggpht.com",
      "picsum.photos",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "www.google.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig
