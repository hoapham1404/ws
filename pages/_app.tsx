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
import IntlProvider from "@/components/IntlProvider/IntlProvider";

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
        <div className={`${montserrat.className} mdl-js`}>
          <Navbar />
          <main className="flex-1">
            <Component {...pageProps} />
          </main>
          <NavigationScreen />
          <ScreenTip />
          <Footer />
        </div>
      </IntlProvider>
    </React.Fragment>
  );
}
