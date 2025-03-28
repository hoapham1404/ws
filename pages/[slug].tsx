import { getRouteByPath, RouteStore } from "@/constants/routes";
import PageLayout from "@/components/Layout/PageLayout";
import PreviewContent from "@/components/BasicColorPage/PreviewContent";
import SettingsPanel from "@/components/BasicColorPage/SettingsPanel";
import { routes } from "@/constants/routes";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { UpdateProgressProvider } from "@/contexts/UpdateProgressContext";
import { FakeUpdateScreenRight } from "@/components/screens/FakeUpdateScreen/FakeUpdateScreenRight";
import ColorOptions from "@/components/BasicColorPage/ColorOptions";
import ScreenOptions from "@/components/BasicColorPage/ScreenOptions";
import NavigateBar from "@/components/(prank-screen)/components/NavigateBar";
import { DVDBottom } from "@/components/DVDSaver/DVDBottom";
import { FakeUpdateScreenBottom } from "@/components/screens/FakeUpdateScreen/FakeUpdateScreenBottom";
import { FakeUpdateScreenLeft } from "@/components/screens/FakeUpdateScreen/FakeUpdateScreenLeft";

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  const paths = [];
  for (const locale of locales) {
    for (const route of routes) {
      paths.push({
        params: { slug: route.path },
        locale,
      });
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
};
type Props = {
  locale?: string;
  locales?: string[];
};

export const getStaticProps: GetStaticProps<Props> = async ({
  locale,
  locales,
}) => {
  return {
    props: {
      locale,
      locales,
      messages: (await import(`@/locales/${locale}.json`)).default,
    },
  };
};

export default function DynamicPage() {
  const pathname = usePathname();
  const t = useTranslations(pathname);
  const raw = useTranslations();
  const route: RouteStore | undefined = getRouteByPath(pathname);
  if (!route) return <div>Not found</div>;

  const title = (() => {
    if (!route.type) return pathname;
    switch (route.type) {
      case "color":
      case "screensaver":
      case "fake-update":
      case "prank":
        return raw("title", { title: t("name") });
      default:
        return raw("title", { title: t("name") });
    }
  })();

  return (
    <React.Fragment>
      {route.isPage && route.components?.mid}

      <Head>
        <title>{title}</title>
        <meta name="description" content={route.path} />
        <link
          rel="icon"
          href={
            route.isPage
              ? "/null"
              : route.color
                ? `data:image/svg+xml,
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
              <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(route.color)}'/>
          </svg>`
                : route.icon || "/favicon.ico"
          }
        />
      </Head>
      <div>
        {route.type === "color" && (
          <PageLayout
            left={<ColorOptions />}
            mid={<PreviewContent />}
            right={<SettingsPanel />}
            bottom={<ScreenOptions />}
          />
        )}
        {route.type === "prank" && (
          <PageLayout
            mid={route.components?.mid}
            right={route.components?.right}
            bottom={<NavigateBar />}
          />
        )}
        {route.type === "fake-update" && (
          <UpdateProgressProvider>
            <PageLayout
              left={route.components?.left ?? <FakeUpdateScreenLeft />}
              mid={route.components?.mid}
              right={
                [
                  "/fake-ubuntu-22-04-update-screen",
                  "/fake-chrome-os-update-screen",
                ].includes(route.path) ? (
                  route.components?.right
                ) : (
                  <FakeUpdateScreenRight />
                )
              }
              bottom={route.components?.bottom ?? <FakeUpdateScreenBottom />}
            />
          </UpdateProgressProvider>
        )}
        {route.type === "screensaver" && (
          <PageLayout
            mid={route.components?.mid}
            right={route.components?.right}
            bottom={route.components?.bottom || <DVDBottom />}
          />
        )}
      </div>
    </React.Fragment>
  );
}
