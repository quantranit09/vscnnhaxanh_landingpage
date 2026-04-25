import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Fix: silence "multiple lockfiles" workspace root warning
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
