import { create } from "zustand";

interface WhiteNoiseState {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const whiteNoiseStore = create<WhiteNoiseState>((set) => ({
  isPlaying: false,
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
