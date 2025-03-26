import { getScreensNavBar, ScreenNavBar } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import { cn } from "@/lib/utils";

export default function ScreensNavBar(): JSX.Element {
  const screensNavBar: ScreenNavBar[] = getScreensNavBar();
  const pathName = usePathname();

  return (
    <nav className="flex gap-4">
      {screensNavBar.map((screen: ScreenNavBar) => (
        <Link
          key={screen.href}
          href={screen.href}
          className={cn(
            "text-sm font-medium text-gray-600 transition-colors",
            "hover:text-gray-900",
            screen.href === pathName ? "text-black font-semibold" : "",
          )}
        >
          {screen.name} screens
        </Link>
      ))}
    </nav>
  );
}
