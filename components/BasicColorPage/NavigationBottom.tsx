import { RouteStore } from "@/constants/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";

export default function NavigationBottom({ routes }: { routes: RouteStore[] }) {
  const currentPath = usePathname();
  const t = useTranslations();

  return (
    <div className="flex justify-between mt-4 cursor-pointer">
      {routes.map((route: RouteStore) => (
        <Link
          key={route.path}
          href={route.path}
          className={`w-full flex flex-col items-center p-6 ${route.path === currentPath ? 'bg-gray-300' : ''}`}
        >
          <div className="shadow-md">
            {
              route.color ?
                <div className="w-32 aspect-video rounded-md shadow-md hover:opacity-90 transition-opacity" style={{ backgroundColor: route.color }}
                />
                :
                <Image src={route.thumbnail as StaticImageData} alt={route.path} className="w-32 aspect-video object-cover rounded-lg" />
            }
          </div>

          <span className="mt-2 text-sm md:text-base underline text-center">{t(`${route.path}.name`)}</span>
        </Link>
      ))
      }
    </div >
  )
}
