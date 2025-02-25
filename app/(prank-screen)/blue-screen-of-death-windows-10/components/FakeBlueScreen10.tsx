"use client";

import { useRef, useState, useEffect } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import windowQRCode from "@/public/window-qr.svg";
import Image from "next/image";
import React from "react";

export default function FakeBlueScreen10() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [updateTime, setUpdateTime] = useState(42);
  const [startTime, setStartTime] = useState(7);
  const [progress, setProgress] = useState(startTime);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleRestart = () => {
    setProgress(startTime);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    progressInterval.current = setInterval(
      () => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (progressInterval.current) {
              clearInterval(progressInterval.current);
            }
            return 100;
          }
          return prev + 1;
        });
      },
      (updateTime * 60 * 1000) / (100 - startTime),
    );
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);
  return (
    <React.Fragment>
      <div className="flex gap-8">
        <div
          ref={containerRef}
          className={`relative flex-1 ${isFullscreen ? "" : "aspect-video"}`}
        >
          <div
            className={`w-full h-full rounded-lg shadow-lg bg-[#0078D7] ${
              isFullscreen ? "fixed inset-0 z-50" : ""
            } font-sans`}
          >
            <div
              className={`text-white font-light ${
                isFullscreen
                  ? "absolute inset-0 flex flex-col items-center justify-center text-3xl p-16"
                  : "p-8 text-xl"
              }`}
            >
              <div className="font-normal mb-6 text-7xl">:(</div>
              <div className="mb-6">
                Your PC ran into a problem and needs to restart. We&apos;re just
                collecting some error info, and then we&apos;ll restart for you.
              </div>
              <div className="mb-8">
                <span className="font-normal ">{progress}</span>% complete
              </div>
              <div className="mt-auto flex">
                <Image
                  src={windowQRCode}
                  alt="QR Code"
                  width={100}
                  height={100}
                />
                <div
                  className={`${isFullscreen ? "text-base" : "text-sm"} text-white space-y-4 ml-4`}
                >
                  <p>
                    For more information about this issue and possible fixes,
                    visit https://www.windows.com/stopcode
                  </p>
                  <p>If you call a support person, give them this info:</p>
                  <p>Stop code: CRITICAL_PROCESS_DIED</p>
                </div>
              </div>
            </div>
          </div>
          <Button
            size="icon"
            variant="secondary"
            className={`${isFullscreen ? "fixed right-4 bottom-4 z-50" : "absolute right-4 bottom-4"}`}
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="w-48 space-y-6">
          <div className="space-y-2">
            <Label>Update time</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={updateTime}
                onChange={(e) => setUpdateTime(Number(e.target.value))}
                min={1}
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">minutes</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Start time</Label>
            <div className="flex items-center gap-2">
              <Input
                type="number"
                value={startTime}
                onChange={(e) => setStartTime(Number(e.target.value))}
                min={0}
                max={99}
                className="w-20"
              />
              <span className="text-sm text-muted-foreground">%</span>
            </div>
          </div>

          <Button className="w-full" onClick={handleRestart}>
            Restart
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
