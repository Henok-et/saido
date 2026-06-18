import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Ensure Sanity and Framer Motion packages are transpiled to use the same React copy
  transpilePackages: ["@sanity", "sanity", "framer-motion"],
};

export default nextConfig;
