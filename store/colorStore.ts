import {create} from 'zustand'

interface ColorState {
  currentColor: string;
  setCurrentColor: (newColor: string) => void;
}

export const colorStore = create<ColorState>((set) => ({
  currentColor: "",
  setCurrentColor: (newColor: string) => set({ currentColor: newColor }),
}))
