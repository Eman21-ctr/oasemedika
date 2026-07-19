import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint dijalankan terpisah, tidak perlu saat build Vercel
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
