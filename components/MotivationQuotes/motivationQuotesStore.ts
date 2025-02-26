import { create } from "zustand";

interface MotivationQuotesState {
  paragraph: string;
  author: string;
  additionalSize: number;

  setParagraph: (paragraph: string) => void;
  setAuthor: (author: string) => void;
  setAdditionalSize: (additionalSize: number) => void;
}

const motivationQuotesStore = create<MotivationQuotesState>((set) => ({
  paragraph:
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
  author: "Steve Jobs",
  additionalSize: 0,

  setParagraph: (paragraph: string) => set({ paragraph }),
  setAuthor: (author: string) => set({ author }),
  setAdditionalSize: (additionalSize: number) => set({ additionalSize }),
}));

export default motivationQuotesStore;
export const useMotivationQuotesStore = motivationQuotesStore;
