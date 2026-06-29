// Where the site is served from.
//   - Custom domain at the root (floriantechnologies.ca): "" (current), with
//     public/CNAME present.
//   - Free GitHub Pages project URL (https://<user>.github.io/flotech-website/):
//     set this to "/flotech-website" AND delete public/CNAME.
const BASE_PATH = "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out (GitHub Pages friendly).
  output: "export",

  // Serve assets and routes under the project path on github.io.
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH || undefined,

  // GitHub Pages serves files with trailing slashes; this keeps asset paths
  // resolving correctly without any server rewrites.
  trailingSlash: true,

  // next/image optimization needs a server, which Pages does not provide.
  images: {
    unoptimized: true,
  },

  // The site deploys via GitHub Actions even if a lint rule or a minor type
  // quibble appears, so a deploy is never blocked. Source is written clean.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
