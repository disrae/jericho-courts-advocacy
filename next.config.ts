import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Parent ~/pnpm-lock.yaml made Next treat ~ as the workspace root,
  // which 404'd /_next/static/css/app/layout.css in dev.
  outputFileTracingRoot: projectRoot,
  // /3d is a static three.js page in public/3d (to-scale court concept).
  async rewrites() {
    return [
      { source: "/3d", destination: "/3d/index.html" },
      // VPA drawing set: 8 permanent courts proposal (PDF)
      { source: "/plan", destination: "/plans/jericho-permanent-courts-proposal-plan.pdf" },
    ];
  },
};

export default nextConfig;
