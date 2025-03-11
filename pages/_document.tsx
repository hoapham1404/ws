import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="data:," />
      </Head>
      <body className="bg-[#f5f4f4]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
