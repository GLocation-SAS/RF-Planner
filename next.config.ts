import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const turboRoot = path.dirname(fileURLToPath(import.meta.url));

const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath = raw.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    root: turboRoot,
  },
};

export default nextConfig;