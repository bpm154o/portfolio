/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  experimental: {
    optimizeFonts: true,
  },
  i18n: {
    locales: ["ja"],
    defaultLocale: "ja",
  },
  router: {
    base: '/'
  },
};