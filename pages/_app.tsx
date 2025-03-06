import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavigationScreen from "@/components/NavigationScreen";
import ScreenTip from "@/components/ScreenTip/ScreenTip";
import Head from "next/head";
import React from "react";
import { useRouter } from 'next/router';
import IntlProvider from "@/i18n/IntlProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <React.Fragment>
      <IntlProvider locale={locale!} messages={pageProps.messages}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={`${montserrat.className} mdl-js `}>
          <Navbar />
          <main className="max-w-screen-lg mx-auto">
            <Component {...pageProps} />
            <NavigationScreen />
            <ScreenTip />
          </main>

          <Footer />
        </div>
      </IntlProvider>
    </React.Fragment >
  );
}
