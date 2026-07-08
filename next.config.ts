import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root — several stray package-lock.json files live in
  // parent directories and Next was inferring the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
