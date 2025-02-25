import { notFound } from "next/navigation";
import { getRouteByPath, RouteStore } from "@/constants/routes";
import RootLayout from "@/components/Layout/PageLayout";
import PreviewContent from "@/components/BasicColorPage/PreviewContent";
import ColorOptions from "@/components/BasicColorPage/ColorOptions";
import SettingsPanel from "@/components/BasicColorPage/SettingsPanel";
import ScreenOptions from "@/components/BasicColorPage/ScreenOptions";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const route: RouteStore | undefined = getRouteByPath(slug);
  if (!route) return notFound();
  return {
    title: `${route.color ? `Color: ${route.name}` : `${route.name}`} | Online Tool`,
    icons: route.color
      ? [
          {
            url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(route.color)}'/>
        </svg>`,
          },
        ]
      : route.icon
        ? [{ url: route.icon }]
        : undefined,
  };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const route = getRouteByPath(slug);
  if (!route) return notFound();

  switch (route.type) {
    case "color":
      return (
        <RootLayout
          left={<ColorOptions />}
          mid={<PreviewContent />}
          right={<SettingsPanel />}
          bottom={<ScreenOptions />}
        />
      );
    case "prank":
    case "fake-update":
    case "screensaver":
      return <RootLayout mid={<div>{route.title}</div>} />;
    default:
      return <RootLayout mid={<div>Main Content</div>} />;
  }
}
