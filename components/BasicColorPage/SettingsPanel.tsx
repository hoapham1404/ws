'use client'
import { usePathname } from "next/navigation";
import ResolutionOptions from "./ResolutionOptions";
import Temperature from "./Temperature";
import { useTranslations } from "next-intl";
import DownloadImageButton from "@/components/BasicColorPage/DownloadImageButton";


export default function SettingsPanel() {
  const currentPath = usePathname();
  const t = useTranslations(currentPath);

  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-4 ml-4 text-2xl ">{t("name")}</h3>
      <ResolutionOptions />
      <Temperature />
      <DownloadImageButton />
    </div>
  )
}
