import ColorOptions from "@/components/BasicColorPage/ColorOptions";
import PreviewContent from "@/components/BasicColorPage/PreviewContent";
import ScreenOptions from "@/components/BasicColorPage/ScreenOptions";
import SettingsPanel from "@/components/BasicColorPage/SettingsPanel";
import RootLayout from "@/components/Layout/PageLayout";
import { getRouteByPath, RouteStore } from "@/constants/routes";
import { GetStaticProps } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import React from "react";


export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {

  return {
    props: {
      locale,
      locales,
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
};
export default function HomePage() {
  const route: RouteStore | undefined = getRouteByPath("/");
  const t = useTranslations("/");
  if (!route) return null;

  return (
    <React.Fragment>
      <Head>
        <title>{t("name")}</title>
        <meta name="description" content={t("tip.title")} />
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
    </React.Fragment >
  )
}
