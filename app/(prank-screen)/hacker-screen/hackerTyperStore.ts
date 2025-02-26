import { create } from "zustand";

interface HackerTyperState {
  text: string;
  speed: number;
  setText: (text: string) => void;
  setSpeed: (speed: number) => void;
  handleSpeedChange: (change: number) => void;
}

export const useHackerTyperStore = create<HackerTyperState>((set) => ({
  text: "",
  speed: 3,
  setText: (text: string) => set({ text }),
  setSpeed: (speed: number) => set({ speed }),
  handleSpeedChange: (change: number) =>
    set((state) => ({
      speed: Math.max(1, Math.min(10, state.speed + change)),
    })),
}));
