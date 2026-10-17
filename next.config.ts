import type { NextConfig } from "next";

const nextConfig: NextConfig = {`n  output: "export",`n  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;