import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"

export default function Header() {
  const pathName = usePathname();
  const t = useTranslations(pathName);

  return (
    <h1 className="text-center my-8 text-5xl">{t("name")}</h1>
  )
}
