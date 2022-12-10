/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com']
  },
  env: {
    MONGO_URI:"mongodb+srv://cyberaura:Cyb3rAura559%23@cluster0.owfyg69.mongodb.net/?retryWrites=true&w=majority&ssl=true"
  }

module.exports = nextConfig
