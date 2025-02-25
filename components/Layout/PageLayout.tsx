import React from "react";
import Header from "@/components/Header";
import LeftSidePanel from "@/components/Layout/LeftSidePanel";
import RightSidePanel from "@/components/Layout/RightSidePanel";
import BottomPanel from "@/components/Layout/BottomPanel";
import PreviewBox from "@/components/Layout/PreviewBox";

interface PageLayoutProps {
  left?: React.ReactNode;
  mid: React.ReactNode;
  right?: React.ReactNode;
  children?: React.ReactNode; // For nested pages/layouts
}

export default function RootLayout({
  left,
  mid,
  right,
  children,
}: PageLayoutProps) {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="min-h-screen p-3 md:p-5 bg-white text-black">
        <Header />
        <main className="max-w-7xl mx-auto relative flex flex-col md:block">
          <LeftSidePanel>
            <div className="flex flex-col gap-4">{left}</div>
          </LeftSidePanel>

          <PreviewBox>
            {mid || children} {/* Fallback to children if mid isn’t provided */}
          </PreviewBox>

          <RightSidePanel>
            <div className="flex flex-col gap-4">{right}</div>
          </RightSidePanel>

          <BottomPanel>
            <div>Nothing</div>
          </BottomPanel>
        </main>
      </div>
    </section>
  );
}
