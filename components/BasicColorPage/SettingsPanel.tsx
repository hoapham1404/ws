import { usePathname } from "next/navigation";
import ResolutionOptions from "./ResolutionOptions";
import Temperature from "./Temperature";
import { useTranslations } from "next-intl";
import DownloadImageButton from "@/components/BasicColorPage/DownloadImageButton";
import ColorPicker from "./ColorPicker";

export default function SettingsPanel() {
  const currentPath = usePathname();
  const t = useTranslations(currentPath);

  return (
    <div className="ml-8 flex flex-col justify-center items-center">
      <section className="flex flex-col gap-2">
        <h3 className="my-4 mx-6 text-center text-xl text-balance">{t("name")} background</h3>
        <ResolutionOptions />
        <DownloadImageButton />
      </section>
      <Temperature />
      <ColorPicker />
    </div>
  )
}
