/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
    serverComponentsExternalPackages: ["@appsignal/nodejs"],
  }
};

module.exports = nextConfig;
