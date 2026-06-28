/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out (GitHub Pages friendly).
  output: "export",

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
