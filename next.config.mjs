/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.pexels.com",
    },   {
      protocol: "https",
      hostname: "assets.aceternity.com",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "miro.medium.com",
    },
    {
      protocol: "https",
      hostname: "fiverr-res.cloudinary.com",
    },
    {
      protocol: "https",
      hostname: "encrypted-tbn0.gstatic.com",
    },
  ],
},};

export default nextConfig;
