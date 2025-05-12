import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    // Warning: This allows ESLint errors to be ignored during the build process.
    // This is not recommended for production builds.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows TypeScript errors to be ignored during the build process.
    // This is not recommended for production builds.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
