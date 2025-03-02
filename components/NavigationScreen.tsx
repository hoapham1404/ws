'use client';
import { getNavigationRoutes, RouteStore } from "@/constants/routes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


export default function NavigationScreen() {
  const pathName = usePathname();
  const navigationRoutes = getNavigationRoutes(pathName);

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
                  type.replace(/-/g, ' ') // Replace hyphens with spaces
                    .replace(/^\w/, match => match.toUpperCase()) // Capitalize only the first letter
                    .concat(" screens")// Append " Screens" to all words
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
                      {route.name}
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
