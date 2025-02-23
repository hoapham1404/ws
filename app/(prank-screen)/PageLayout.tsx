import React from "react";
import FullScreenContainer from "./components/FullScreenContainer";

interface PageLayoutProps {
  left?: React.ReactNode;
  mid: React.ReactNode;
  right?: React.ReactNode;
}

export default function PageLayout({ left, mid, right }: PageLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto relative flex flex-col md:block min-h-screen">
      {left && (
        <div className="static md:fixed md:left-20 md:top-[120px] space-y-2 mb-4 md:mb-0 z-10">
          {left}
        </div>
      )}
      <FullScreenContainer className="flex-1">{mid}</FullScreenContainer>
      {right && (
        <div className="static md:fixed md:right-5 md:top-[120px] space-y-4 mb-4 md:mb-0 z-10">
          {right}
        </div>
      )}
    </div>
  );
}
