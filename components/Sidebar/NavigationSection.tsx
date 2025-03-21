import { getNavigationRoutes, RouteStore } from "@/constants/routes";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

export default function NavigationSection(): JSX.Element {
  const pathName = usePathname();
  const navigationRoutes = getNavigationRoutes(pathName);
  const t = useTranslations();

  const groupedRoutes: Record<string, RouteStore[]> = {};
  navigationRoutes?.forEach((route: RouteStore) => {
    if (!route.type) return;
    if (!groupedRoutes[route.type]) {
      groupedRoutes[route.type] = [];
    }
    switch (route.type) {
      case "color":
        if (route?.isAxis === false) {
          groupedRoutes["color"].push(route);
        }
        break;
      case "fake-update":
        if (route.path !== '/fake-windows-11-update-screen' && route.path !== '/fake-android-update') {
          groupedRoutes["fake-update"].push(route);
        }
        break;
      default:
        groupedRoutes[route.type].push(route);
    }
  });

  return (
    <Accordion type="single" collapsible>
      {Object.entries(groupedRoutes).map(([type, routes]) => {
        return (
          <AccordionItem key={type} value={type}>
            <AccordionTrigger>{t(`navigation.${type}`)}</AccordionTrigger>
            <AccordionContent className="grid grid-cols-2">
              {routes.map((route: RouteStore) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`w-full flex flex-col items-center p-1 ${route.path === pathName ? 'bg-gray-300' : ''}`}
                >
                  <div className="shadow-md">
                    {
                      route.color ?
                        <div className="w-16 aspect-video rounded-md shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: route.color }}
                        />
                        :
                        <Image src={route.thumbnail as StaticImageData} alt={route.path} className="w-16 aspect-video object-cover rounded-lg" />
                    }
                  </div>

                  <span className="mt-2 text-sm underline text-center text-balance w-32">{t(`${route.path}.name`)}</span>
                </Link>
              ))
              }
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion >
  )
};

