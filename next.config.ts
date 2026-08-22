import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [{ source: "/facts", destination: "/why", permanent: true }];
  },
};

export default nextConfig;
