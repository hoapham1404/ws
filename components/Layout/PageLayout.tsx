import React from "react";
import FullScreenWrapper from "../(prank-screen)/components/FullScreenWrapper";

interface PageLayoutProps {
  left?: React.ReactNode;
  mid: React.ReactNode;
  right?: React.ReactNode;
  bottom?: React.ReactNode;
}

export default function PageLayout({
  left,
  mid,
  right,
  bottom,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col">
      <main className="grid grid-cols-[2fr_3fr_2fr] grid-rows-2">
        <div className="overflow-auto">{left}</div>
        <div className="rounded-lg overflow-hidden aspect-video "
          style={{
            boxShadow: "0 8px 30px #ffbe5c"
          }}
        >
          <FullScreenWrapper>
            {mid}
          </FullScreenWrapper>
        </div>
        <div className="overflow-auto">
          <div className="ml-8 h-full">{right}</div>
        </div>
        <div className="col-span-3">
          {bottom}
        </div>
      </main>
    </div>
  );
}
