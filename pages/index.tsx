import ColorOptions from "@/components/BasicColorPage/ColorOptions";
import PreviewContent from "@/components/BasicColorPage/PreviewContent";
import ScreenOptions from "@/components/BasicColorPage/ScreenOptions";
import SettingsPanel from "@/components/BasicColorPage/SettingsPanel";
import RootLayout from "@/components/Layout/PageLayout";
import { getRouteByPath } from "@/constants/routes";
import Head from "next/head";
import React from "react";

export default function HomePage() {
  const route = getRouteByPath("/");
  if (!route) return;

  return (
    <React.Fragment>
      <Head>
        <title>{route.color ? route.name + " | Online Tool" : route.name + " | Online Tool"}</title>
        <meta name="description" content={route.path} />
        <link rel="icon" href={route.color ? `data:image/svg+xml,
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(route.color)}'/>
      </svg>` : route.icon} />
      </Head>
      <div>
        <RootLayout
          left={<ColorOptions />}
          mid={<PreviewContent />}
          right={<SettingsPanel />}
          bottom={<ScreenOptions />}
        />
      </div>

    </React.Fragment>
  )
}
