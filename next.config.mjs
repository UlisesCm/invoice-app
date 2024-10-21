import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/new",
        permanent: true,
      },
    ];
  },
};

export default withVanillaExtract(nextConfig);
