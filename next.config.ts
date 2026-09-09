import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root — several stray package-lock.json files live in
  // parent directories and Next was inferring the wrong one.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // One local, trusted SVG (a sponsor logo) needs this — the optimizer
    // blocks SVGs by default since they can carry scripts.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
