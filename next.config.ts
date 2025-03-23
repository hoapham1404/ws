import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    // cn.json  de.json  en.json  es.json  fr.json  it.json  ja.json  ko.json  nl.json  pl.json  pt.json  sv.json  tr.json  uk.json
    locales: [
      "en",
      "nl",
      "fr",
      "de",
      "cn",
      "ko",
      "es",
      "it",
      "ja",
      "pl",
      "pt",
      "sv",
      "tr",
      "uk",
    ],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
  },
};

export default nextConfig;
