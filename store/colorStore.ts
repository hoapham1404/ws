import { hexToTemperature, temperatureToHex } from "@/lib/temperature";
import { create } from "zustand";

interface ColorState {
  currentColor: string;
  currentTemperature: number;
  currentResolution: {
    resX: number;
    resY: number;
  };
  setCurrentColor: (newColor: string) => void;
  setResolution: (resX: number, resY: number) => void;
  setPresetResolution: (
    preset: "480p" | "720p" | "1080p" | "1440p 2K" | "2160p 4K" | "4320p 8K",
  ) => void;
  setTemperature: (temperature: number) => void;
}

const RESOLUTION_PRESETS = {
  "480p": [640, 480],
  "720p": [1920, 1080],
  "1080p": [1920, 1080],
  "1440p 2K": [2560, 1440],
  "2160p 4K": [4096, 2160],
  "4320p 8K": [7680, 4320],
} as const;

export const colorStore = create<ColorState>((set) => ({
  currentColor: "",
  currentTemperature: 1111,
  currentResolution: {
    resX: 1920,
    resY: 1080,
  },
  setCurrentColor: (newColor: string) => {
    const temp = hexToTemperature(newColor);
    set({ currentTemperature: temp ?? 1111, currentColor: newColor });
  },
  setResolution: (resX: number, resY: number) =>
    set({ currentResolution: { resX, resY } }),
  setPresetResolution: (preset) => {
    const [resX, resY] = RESOLUTION_PRESETS[preset];
    set({ currentResolution: { resX, resY } });
  },
  setTemperature: (temperature: number) =>
    set(() => ({
      currentTemperature: temperature,
      currentColor: temperatureToHex(temperature),
    })),
}));
