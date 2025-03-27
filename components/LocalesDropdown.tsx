import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LocalesDropdown() {
  const router = useRouter();
  const { locale: activeLocale, locales, asPath } = router;
  const [isOpen, setIsOpen] = useState(false);

  const getLanguageLabel = (locale: string) => {
    /**
     * Deutschland, English, France, Schweiz, Nederland, 한국어
     * cn.json  de.json  en.json  es.json  fr.json  it.json  ja.json  ko.json  nl.json  pl.json  pt.json  sv.json  tr.json  uk.json
     */
    const labels: Map<string, string> = new Map([
      ["de", "Deutsch"], // Germany
      ["en", "English"], // English
      ["fr", "Français"], // France
      ["nl", "Nederland"], // Netherlands
      ["cn", "中國"], // China
      ["ko", "한국어"], // Korean

      // Add more languages here
      ["es", "Español"], // Spanish
      ["it", "Italiano"], // Italian
      ["ja", "日本語"], // Japanese
      ["pl", "Polski"], // Polish
      ["pt", "Português"], // Portuguese
      ["sv", "Svenska"], // Swedish
      ["tr", "Türkçe"], // Turkish
      ["uk", "Українська"], // Ukrainian
    ]);

    return labels.get(locale) || locale;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="border-0 appearance-none bg-transparent text-xl relative [&:hover]:bg-transparent"
      >
        <span className="flex items-center justify-center">
          {getLanguageLabel(activeLocale || "")}
        </span>
        {isOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-10 shadow-[0_8px_30px_rgba(0,0,0,.32)] w-32 bg-white">
            <div className="flex flex-col gap-2 text-left text-base">
              {locales
                ?.filter((locale) => locale !== activeLocale)
                .map((locale) => (
                  <Link
                    href={asPath}
                    locale={locale}
                    key={locale}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 hover:bg-gray-300"
                  >
                    {getLanguageLabel(locale)}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </button>
    </div>
  );
}
