import { useEffect, useRef } from "react";
import React from "react";
import { whiteNoiseStore } from "./whiteNoise";

export default function WhiteNoiseScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const isPlaying = whiteNoiseStore((state) => state.isPlaying);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise; // red
        data[i + 1] = noise; // green
        data[i + 2] = noise; // blue
        data[i + 3] = 255; // alpha
      }

      ctx.putImageData(imageData, 0, 0);
      animationId = requestAnimationFrame(drawNoise);
    };

    drawNoise();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      canvasRef.current.width = containerRef.current.clientWidth;
      canvasRef.current.height = containerRef.current.clientHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      try {
        audioContextRef.current = new (window.AudioContext ||
          window.webkitAudioContext)();
        gainNodeRef.current = audioContextRef.current.createGain();
        const bufferSize = 4096;
        const whiteNoise = audioContextRef.current.createScriptProcessor(
          bufferSize,
          1,
          1,
        );

        whiteNoise.onaudioprocess = (e) => {
          const output = e.outputBuffer.getChannelData(0);
          for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
          }
        };

        gainNodeRef.current.gain.value = 0.1; // Reduce volume
        whiteNoise.connect(gainNodeRef.current);
        gainNodeRef.current.connect(audioContextRef.current.destination);
      } catch (error) {
        console.error("Error initializing AudioContext:", error);
      }
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, [isPlaying]);

  return (
    <React.Fragment>
      <div ref={containerRef} className="relative mb-8 aspect-video">
        <canvas
          ref={canvasRef}
          className="w-full h-full rounded-lg shadow-lg"
          style={{
            boxShadow: "0 0 40px rgba(255, 166, 0, 0.2)",
          }}
        />
      </div>
    </React.Fragment>
  );
}
