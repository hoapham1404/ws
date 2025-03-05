import { colorStore } from "@/store/colorStore";
import downloadImage from "@/lib/downloadImage";
import { useTranslations } from "next-intl";

export default function DownloadImageButton() {
  const { currentResolution, currentColor } = colorStore((state) => state);
  const t = useTranslations("settings.color");
  return (
    <button
      onClick={() => downloadImage(currentResolution, currentColor)}
      className="w-full py-2 px-4 border rounded bg-white hover:bg-gray-50 mt-4"
    >
      {t("0")}
    </button>
  );
}
