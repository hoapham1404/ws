import { useEffect, useRef } from "react";

export default function Video({ srcRef }: { srcRef: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = `/${srcRef}.mp4`;
      videoRef.current.load(); // Ensures the new video is loaded
      videoRef.current.play(); // Auto-play the new video
    }
  }, [srcRef]);

  return (
    <video
      ref={videoRef}
      preload="none"
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
    />
  );
}