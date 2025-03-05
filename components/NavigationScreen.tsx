'use client';
import { getNavigationRoutes, RouteStore } from "@/constants/routes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";


export default function NavigationScreen() {
  const pathName = usePathname();
  const navigationRoutes = getNavigationRoutes(pathName);
  const t = useTranslations();


  // Group routes by type
  const groupedRoutes: Record<string, RouteStore[]> = {};

  navigationRoutes?.forEach((route: RouteStore) => {
    if (!groupedRoutes[route.type]) {
      groupedRoutes[route.type] = [];
    }

    if (route.type === "color" && route?.isAxis === false) {
      groupedRoutes["color"].push(route);
    } else if (route.type !== "color") {
      groupedRoutes[route.type].push(route);
    }
  });

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {
        Object.entries(groupedRoutes).map(([type, routes]) => {
          return (
            <div className="flex flex-col gap-4 justify-center items-center" key={type}>
              <p className="text-2xl">
                {
                  t(`navigation.${type}`)
                }
              </p>
              <div className="flex flex-wrap justify-center mb-4 cursor-pointer">
                {routes.map((route) => (
                  <Link key={route.name} href={route.path} className={"flex flex-col items-center p-6"}>
                    <button className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity">
                      {route.thumbnail && <Image src={route.thumbnail} alt={route.name} className="mx-auto object-cover" />}
                      {route.color && <div className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: route.color }} />}
                    </button>
                    <span className="mt-6 text-sm md:text-base underline">
                      {t(`${route.path}.name`)}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
