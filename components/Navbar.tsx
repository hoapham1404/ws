import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/router"

export default function Navbar() {
  const router = useRouter();
  const { locale: activeLocale, locales, pathname, query, asPath, defaultLocale } = router;

  const handleLocaleChange = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const getLanguageLabel = (locale: string) => {
    const labels: Record<string, string> = {
      en: 'English',
      vi: 'Tiếng Việt'
    };
    return labels[locale] || locale;
  };

  return (
    <header className="py-[20px]">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl">
            WS
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Feedback
          </Link>
        </div>

        <Select defaultValue={defaultLocale} onValueChange={handleLocaleChange}>
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder={getLanguageLabel(defaultLocale || 'en')} />
          </SelectTrigger>
          <SelectContent>
            {locales?.map((locale) => (
              <SelectItem key={locale} value={locale}>
                {getLanguageLabel(locale)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
