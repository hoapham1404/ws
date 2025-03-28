import { RouteStore } from "@/constants/routes";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export default function NavigationBottom({ routes }: { routes: RouteStore[] }) {
  const currentPath = usePathname();
  const t = useTranslations();

  // Calculate the grid columns based on routes length
  const gridCols = Math.min(6, routes.length);

  return (
    <div className="flex justify-center w-full">
      <div
        className="grid place-items-center cursor-pointer"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
          width: `${gridCols * 16.66}%`, // Calculate width based on number of columns (100/6 ≈ 16.66)
        }}
      >
        {routes.map((route: RouteStore) => (
          <Link
            key={route.path}
            href={route.path}
            className={`w-full flex flex-col items-center p-6 ${route.path === currentPath ? "bg-gray-300" : ""
              }`}
          >
            {route.color ? (
              <div className="">
                <div
                  className={cn(
                    "w-28 aspect-square hover:opacity-90 transition-opacity",
                    "rounded-full overflow-hidden"
                  )}
                  style={{
                    backgroundColor: route.color,
                    boxShadow: " 0 8px 30px rgba(0, 0, 0, .32)",
                  }}
                />
              </div>
            ) : (
              <Image
                src={route.thumbnail as StaticImageData}
                alt={route.path}
                className={cn(
                  "w-32 aspect-video object-cover rounded-lg",
                  "overflow-hidden"
                )}
                style={{
                  boxShadow: " 0 8px 30px rgba(0, 0, 0, .32)",
                }}
              />
            )}

            <span className="mt-2 text-sm md:text-base underline text-center">
              {t(`${route.path}.name`)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
