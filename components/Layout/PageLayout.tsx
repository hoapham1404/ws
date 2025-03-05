import Header from "@/components/Header";
import LeftSidePanel from "@/components/Layout/LeftSidePanel";
import RightSidePanel from "@/components/Layout/RightSidePanel";
import BottomPanel from "@/components/Layout/BottomPanel";
import PreviewBox from "@/components/Layout/PreviewBox";
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
    <React.Fragment>
      <Header />
      <main className="grid grid-cols-[2fr_3fr_2fr] grid-rows-2 gap-4">
        <div className="overflow-auto">{left}</div>
        <div className="overflow-auto">{mid}</div>
        <div className="overflow-auto">{right}</div>
        <div className="col-span-3">{bottom}</div>
      </main>
    </React.Fragment>
  );
}
