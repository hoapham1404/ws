import { usePathname } from "next/navigation";
import ResolutionOptions from "./ResolutionOptions";
import Temperature from "./Temperature";
import { useTranslations } from "next-intl";
import DownloadImageButton from "@/components/BasicColorPage/DownloadImageButton";
import ColorPicker from "./ColorPicker";

export default function SettingsPanel() {
  const currentPath = usePathname();
  const t = useTranslations(currentPath);
  const setting = useTranslations("settings.color");

  return (
    <div className="max-h-full overflow-hidden flex flex-col justify-center items-center">
      <section className="flex flex-col gap-2">
        <h3 className="my-4 mx-6 text-center text-lg text-balance">
          {setting("1", { title: t("name").split(" ")[0] })}
        </h3>
        <ResolutionOptions />
        <DownloadImageButton />
        <Temperature />
        <ColorPicker />
      </section>
    </div>
  );
}
