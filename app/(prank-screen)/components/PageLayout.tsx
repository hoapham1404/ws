import React from "react";
import Header from "@/components/Header";
import LeftSidePanel from "@/components/Layout/LeftSidePanel";
import RightSidePanel from "@/components/Layout/RightSidePanel";
import BottomPanel from "@/components/Layout/BottomPanel";
import NavigateBar from "./NavigateBar";
import PreviewBox from "@/components/Layout/PreviewBox";
interface PageLayoutProps {
  left?: React.ReactNode;
  mid: React.ReactNode;
  right?: React.ReactNode;
}

export default function PageLayout({ left, mid, right }: PageLayoutProps) {
  return (
    <section className="max-w-7xl mx-auto">

      <div className="min-h-screen p-3 md:p-5 bg-white text-black">
        <Header />
        <main className="max-w-7xl mx-auto relative flex flex-col md:block">
          {/* Left panel containing color selection options */}
          <LeftSidePanel>
            <div className="flex flex-col gap-4">{left}</div>
          </LeftSidePanel>

          {/* Main preview area showing the selected color */}
          <PreviewBox>
            {mid}
          </PreviewBox>

          {/* Right panel containing color settings and controls */}
          <RightSidePanel>
            <div className="flex flex-col gap-4">{right}</div>
          </RightSidePanel>

          {/* Bottom panel with screen navigation options */}
          <BottomPanel>
            <NavigateBar />
          </BottomPanel>
        </main>
      </div>
    </section>
  );
}
