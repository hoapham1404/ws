import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL', 'vi'],
    defaultLocale: 'en-US',
  },
};

export default nextConfig;
