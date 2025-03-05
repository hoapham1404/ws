import Header from "@/components/Header";
import React from "react";

interface PageLayoutProps {
  left?: React.ReactNode;
  mid: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}

export default function RootLayout({
  left,
  mid,
  right,
  bottom,
}: PageLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="grid grid-cols-[2fr_3fr_2fr] grid-rows-2">
        <div className="overflow-auto">{left}</div>
        <div className="overflow-auto">{mid}</div>
        <div className="overflow-auto">{right}</div>
        <div className="col-span-3">{bottom}</div>
      </main>
    </div>
  );
}
