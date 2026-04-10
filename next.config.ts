import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',  // Replace with your actual domain(s)
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',  // Added for placeholder images
        port: '',
        pathname: '/**',
      },
      // Add more patterns as needed
    ],
  },
};

export default nextConfig;