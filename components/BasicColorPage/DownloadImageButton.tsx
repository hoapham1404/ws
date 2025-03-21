import { getRouteByPath, RouteStore } from "@/constants/routes";
import downloadImage from "@/lib/downloadImage";
import colorStore from "@/store/colorStore";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function DownloadImageButton() {
  const { currentResolution, currentColor } = colorStore();
  const t = useTranslations("settings.color");
  const currentPath = usePathname();
  const currentRoute: RouteStore | undefined = getRouteByPath(currentPath)
  if (!currentRoute) return null
  return (
    <button
      data-app-host="true"
      onClick={() => downloadImage(currentResolution, currentColor, currentRoute.colorName)}
      className="mx-auto w-fit border rounded my-6 "
    >
      {t("0")}
    </button>
  );
}
