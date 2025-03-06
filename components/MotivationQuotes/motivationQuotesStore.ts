import { create } from "zustand";

interface MotivationQuotesState {
  paragraph: string;
  author: string;
  additionalSize: number;

  setParagraph: (paragraph: string) => void;
  setAuthor: (author: string) => void;
  setAdditionalSize: (additionalSize: number) => void;
}

const DEFAULT_PARAGRAPH =
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.";
const DEFAULT_AUTHOR = "Steve Jobs";

const motivationQuotesStore = create<MotivationQuotesState>((set) => ({
  paragraph: DEFAULT_PARAGRAPH,
  author: DEFAULT_AUTHOR,
  additionalSize: 0,

  setParagraph: (newParagraph: string) =>
    set({
      paragraph: newParagraph.trim() ? newParagraph : DEFAULT_PARAGRAPH,
    }),

  setAuthor: (newAuthor: string) =>
    set({
      author: newAuthor.trim() ? newAuthor : DEFAULT_AUTHOR,
    }),

  setAdditionalSize: (newAdditionalSize: number) =>
    set({ additionalSize: newAdditionalSize }),
}));

export default motivationQuotesStore;
