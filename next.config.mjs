import path from "node:path";

const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const inferredRepoName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  process.env.npm_package_name?.split("/").pop() ??
  path.basename(process.cwd());
const isUserOrOrgPagesRepo = inferredRepoName.endsWith(".github.io");
const shouldUseBasePath =
  configuredBasePath !== undefined || process.env.NODE_ENV === "production";
const basePath =
  !shouldUseBasePath
    ? ""
    : configuredBasePath !== undefined
    ? configuredBasePath
    : inferredRepoName && !isUserOrOrgPagesRepo
      ? `/${inferredRepoName}`
      : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath
      }
    : {})
};

export default nextConfig;
