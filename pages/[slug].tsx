import { getRouteByPath, RouteStore } from "@/constants/routes";
import RootLayout from "@/components/Layout/PageLayout";
import PreviewContent from "@/components/BasicColorPage/PreviewContent";
import ColorOptions from "@/components/BasicColorPage/ColorOptions";
import SettingsPanel from "@/components/BasicColorPage/SettingsPanel";
import ScreenOptions from "@/components/BasicColorPage/ScreenOptions";
import NavigateBar from "@/components/(prank-screen)/components/NavigateBar";
import { DVDBottom } from "@/components/DVDSaver/DVDBottom";
import { FakeUpdateScreenBottom } from "./screens/FakeUpdateScreen/FakeUpdateScreenBottom";
import { FakeUpdateScreenLeft } from "./screens/FakeUpdateScreen/FakeUpdateScreenLeft";
import { UpdateProgressProvider } from "./contexts/UpdateProgressContext";
import { FakeUpdateScreenRight } from "./screens/FakeUpdateScreen/FakeUpdateScreenRight";
import { routes } from "@/constants/routes";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const slug = (await params).slug;
//   const route: RouteStore | undefined = getRouteByPath(slug);
//   if (!route) return notFound();
//   return {
//     title: `${route.color ? `${route.name}` : `${route.name}`} | Online Tool`,
//     icons: route.color
//       ? [
//         {
//           url: `data:image/svg+xml,
//         <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
//             <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(route.color)}'/>
//         </svg>`,
//         },
//       ]
//       : route.icon
//         ? [{ url: route.icon }]
//         : undefined,
//   };
// }
//
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = routes.map((route: RouteStore) => ({
    params: { slug: route.path },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps<{ slug: string }> = async ({ params }) => {
  const slug = params?.slug as string;
  const route = getRouteByPath(slug);
  if (!route) return { notFound: true };

  return {
    props: {
      slug: params?.slug as string,
    },
  };
}

export default function DynamicPage({ slug }: { slug: string }) {
  const route = getRouteByPath(slug);
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
        {route.type === "color" && (
          <RootLayout
            left={<ColorOptions />}
            mid={<PreviewContent />}
            right={<SettingsPanel />}
            bottom={<ScreenOptions />}
          />
        )}
        {route.type === "prank" && (
          <RootLayout
            mid={route.components?.mid}
            right={route.components?.right}
            bottom={<NavigateBar />}
          />
        )}
        {route.type === "fake-update" && (
          <UpdateProgressProvider>
            <RootLayout
              left={route.components?.left ?? <FakeUpdateScreenLeft />}
              mid={route.components?.mid}
              right={
                ["/fake-update-ubuntu-22-04", "/fake-update-chrome-os"].includes(
                  route.path,
                ) ? (
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
          <RootLayout
            mid={route.components?.mid}
            right={route.components?.right}
            bottom={route.components?.bottom || <DVDBottom />}
          />
        )}

      </div>

    </React.Fragment>

  )
}
