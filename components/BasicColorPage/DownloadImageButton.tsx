import downloadImage from "@/lib/downloadImage";
import colorStore from "@/store/colorStore";
import { useTranslations } from "next-intl";

export default function DownloadImageButton() {
  const { currentResolution, currentColor } = colorStore();
  const t = useTranslations("settings.color");
  return (
    <button
      onClick={() => downloadImage(currentResolution, currentColor)}
      className="mx-auto w-fit border rounded my-6 "
    >
      {t("0")}
    </button>
  );
}
