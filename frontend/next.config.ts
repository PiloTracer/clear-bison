import type { NextConfig } from "next";

const apiUpstream = process.env.API_INTERNAL_URL || "http://api:8000";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      { source: "/health", destination: `${apiUpstream}/health` },
      { source: "/api/:path*", destination: `${apiUpstream}/api/:path*` },
      { source: "/docs", destination: `${apiUpstream}/docs` },
      { source: "/openapi.json", destination: `${apiUpstream}/openapi.json` },
    ];
  },
};

export default nextConfig;
