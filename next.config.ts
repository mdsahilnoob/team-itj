import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // domains: ['images.unsplash.com', 'res.cloudinary.com' ,'teamitj.tech'],
  images: {
    remotePatterns: [ {
      protocol: 'https',
      hostname: 'teamitj.tech',
      port: '',

    },
  ],
    domains: ['images.unsplash.com', 'res.cloudinary.com' ,'teamitj.tech'],
  }
};

export default nextConfig;
