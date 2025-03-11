import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { useRouter } from 'next/router';
import IntlProvider from "@/i18n/IntlProvider";
import { usePathname } from "next/navigation";
import { getRouteByPath } from "@/constants/routes";
import AppLayout from "./AppLayout";
import "./globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const pathname = usePathname();
  const currentRoute = getRouteByPath(pathname);

  return (
    <React.Fragment>
      <IntlProvider locale={locale!} messages={pageProps.messages}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {
          currentRoute?.isPage ?
            (<div style={{ backgroundColor: "white", minHeight: "100vh", padding: "10px" }}><Component {...pageProps} /></div>)
            : (<AppLayout><Component {...pageProps} /></AppLayout>)
        }
      </IntlProvider>
    </React.Fragment >
  );
}
