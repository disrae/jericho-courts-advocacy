import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Parent ~/pnpm-lock.yaml made Next treat ~ as the workspace root,
  // which 404'd /_next/static/css/app/layout.css in dev.
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
