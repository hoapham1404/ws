"use client";
import React, { useEffect, useRef, useState } from "react";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrokenScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);
  return (
    <div ref={containerRef} className="relative mb-8 aspect-video">
      <div
        className="w-full h-full rounded-lg shadow-lg bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/broken.webp')",
          boxShadow: "0 0 40px rgba(255, 166, 0, 0.2)",
        }}
      />
      <Button
        size="icon"
        variant="secondary"
        className="absolute right-4 bottom-4"
        onClick={toggleFullscreen}
      >
        {isFullscreen ? (
          <Minimize2 className="h-4 w-4" />
        ) : (
          <Maximize2 className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
