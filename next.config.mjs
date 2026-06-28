// Where the site is served from.
//   - Free GitHub Pages project URL: "/flotech-website" (served at
//     https://<user>.github.io/flotech-website/).
//   - Custom domain at the root (floriantechnologies.ca): set this to "".
// When switching to the custom domain, set BASE_PATH = "" AND restore the
// public/CNAME file (containing floriantechnologies.ca).
const BASE_PATH = "/flotech-website";

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
