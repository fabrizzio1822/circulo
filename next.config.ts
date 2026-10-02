import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  outputFileTracingExcludes: {
    '*': [
      'public/assets/**/*',
      'public/assets/CONGRESO DÍA 1/**/*',
      'public/assets/CONGRESO DÍA 2/**/*'
    ],
  },
};

export default nextConfig;
