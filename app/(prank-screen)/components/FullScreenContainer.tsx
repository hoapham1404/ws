"use client";
import { useRef, useState, useEffect } from "react";

export default function FullScreenContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const enterFullscreen = async () => {
    try {
      if (ref.current) {
        if (ref.current.requestFullscreen) {
          await ref.current.requestFullscreen();
        } else if ((ref.current as any).webkitRequestFullscreen) {
          await (ref.current as any).webkitRequestFullscreen();
        } else if ((ref.current as any).msRequestFullscreen) {
          await (ref.current as any).msRequestFullscreen();
        }
      }
    } catch (error) {
      console.error("Error attempting to enable fullscreen:", error);
    }
  };

  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen();
      }
    } catch (error) {
      console.error("Error attempting to exit fullscreen:", error);
    }
  };

  const toggleFullscreen = async () => {
    if (
      document.fullscreenElement ||
      (document as any).webkitFullscreenElement ||
      (document as any).msFullscreenElement
    ) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        Boolean(
          document.fullscreenElement ||
            (document as any).webkitFullscreenElement ||
            (document as any).msFullscreenElement,
        ),
      );
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("msfullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange,
      );
      document.removeEventListener(
        "msfullscreenchange",
        handleFullscreenChange,
      );
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`relative [&:fullscreen>*:first-child]:h-full ${className}`}
      onClick={toggleFullscreen}
    >
      {children}
      <span
        className={`${isFullscreen ? "hidden" : "block"} absolute right-4 bottom-4 z-50`}
      >
        FullScreen
      </span>
    </div>
  );
}
