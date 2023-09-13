/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  images: {
    domains: ["tecdn.b-cdn.net"],
  },
  i18n,
  /* config options here */
};
const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts",
);
module.exports = withNextIntl(nextConfig);
