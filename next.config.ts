import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akirakayoo.store",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
