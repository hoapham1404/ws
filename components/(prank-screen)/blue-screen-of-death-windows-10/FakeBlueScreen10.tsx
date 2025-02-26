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
      className={`bg-[#0078D7] text-white h-full cursor-pointer ${
        isFullscreen
          ? "fixed inset-0 z-50 flex flex-col items-center justify-center"
          : ""
      }`}
    >
      <div
        className={`w-4/5 flex flex-col items-start gap-4  ${isFullscreen ? "justify-center " : " mx-auto pt-6  text-[.52rem]"}`}
      >
        <p className={isFullscreen ? "text-9xl" : "text-6xl"}>:(</p>
        <div className={isFullscreen ? "w-1/2 text-wrap" : "w-full text-wrap"}>
          <p
            className={
              isFullscreen
                ? "text-4xl font-light leading-tight"
                : "text-[.9rem] font-light"
            }
          >
            Your PC ran into a problem and needs to restart. We&apos;re just
            collecting some error info, and then we&apos;ll restart for you.
          </p>

          <div className={isFullscreen ? "my-8" : "my-4"}>
            <p
              className={`inline-block mr-2 ${isFullscreen ? "text-4xl" : "text-lg "}`}
            >
              {progress}%
            </p>
            <p
              className={`inline-block font-light ${isFullscreen ? "text-3xl" : "text-[.9rem]"}`}
            >
              complete
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Image
              src={windowQRCode}
              alt="QR Code"
              width={isFullscreen ? 120 : 60}
              height={isFullscreen ? 120 : 60}
            />
            <div
              className={`${isFullscreen ? "text-[.8rem]" : "text-[.4rem] opacity-80"} `}
            >
              <p>
                For more information about this issue and possible fixes, visit
                https://www.windows.com/stopcode
              </p>
              <p className={isFullscreen ? "mt-12 mb-4" : "mt-6 mb-2"}>
                If you call a support person, give them this info:
              </p>
              <p>Stop code: CRITICAL_PROCESS_DIED</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
