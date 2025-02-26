"use client";

import Image from "next/image";
import windowQRCode from "@/public/window-qr.svg";
import { useEffect } from "react";
import { useFakeBlueScreen10Store } from "./fakeBlueScreen10";
import { useFullScreen } from "../hooks/useFullScreen";

export default function FakeBlueScreen10() {
  const { progress, clearProgressInterval } = useFakeBlueScreen10Store();
  const { isFullscreen } = useFullScreen();

  useEffect(() => {
    return () => clearProgressInterval();
  }, [clearProgressInterval]);

  return (
    <div
      className={`p-4 bg-[#0078D7] font-sans ${
        isFullscreen
          ? "fixed inset-0 z-50 flex items-center justify-center"
          : ""
      }`}
    >
      <div className="">:(</div>
      <div className="">
        Your PC ran into a problem and needs to restart. We&apos;re just
        collecting some error info, and then we&apos;ll restart for you.
      </div>
      <div className="">
        <span className="">{progress}</span>% complete
      </div>
      <div className="">
        <Image src={windowQRCode} alt="QR Code" width={100} height={100} />
        <div className="">
          <p>
            For more information about this issue and possible fixes, visit
            https://www.windows.com/stopcode
          </p>
          <p>If you call a support person, give them this info:</p>
          <p>Stop code: CRITICAL_PROCESS_DIED</p>
        </div>
      </div>
    </div>
  );
}
