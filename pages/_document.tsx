import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className="relative flex min-h-screen flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
