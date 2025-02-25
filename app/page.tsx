import RootLayout from "@/components/Layout/PageLayout";
import { getRouteByPath, RouteStore } from "@/constants/routes";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const route: RouteStore | undefined = getRouteByPath("/");
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

export default function Page() {
  return (
    <RootLayout
      left={<div>Left Sidebar</div>}
      mid={<div>Main Content</div>}
      right={<div>Right Sidebar</div>}
    />
  );
}
