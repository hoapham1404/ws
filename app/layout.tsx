import type { Metadata } from "next";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Change My Mind",
  description: "Change My Mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
