import {
  getRouteTypeByPath,
  getScreensNavBar,
  ScreenNavBar,
} from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ScreensNavBar(): JSX.Element {
  const screensNavBar: ScreenNavBar[] = getScreensNavBar();
  const pathName = usePathname();
  const t = useTranslations();


  const getTextNavbarName = (screenName: string): string => {
    if (screenName === 'Color') {
      return 'navbar.color_screens';
    }
    if (screenName === 'Prank') {
      return 'navbar.prank_screens';
    }
    if (screenName === 'Fake Update') {
      return 'navbar.fake_update_screens';
    }
    if (screenName === 'Screensaver') {
      return 'navbar.screen_saver_screens';
    }
    return `${screenName} screens` 
  }

  return (
    <nav className="flex gap-4">
      {screensNavBar.map((screen: ScreenNavBar) => (
        <Link
          key={screen.href}
          href={screen.href}
          className={cn(
            "text-base font-medium text-gray-600 transition-colors",
            "hover:text-gray-900",
            screen.href === pathName ||
              getRouteTypeByPath(pathName) === screen.type
              ? "text-black font-semibold"
              : "",
          )}
        >
          {t(`${getTextNavbarName(screen.name)}`)}
        </Link>
      ))}
    </nav>
  );
}
