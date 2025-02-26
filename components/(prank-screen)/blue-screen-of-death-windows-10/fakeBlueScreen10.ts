import { create } from "zustand";

interface FakeBlueScreen10State {
  updateTime: number;
  startTime: number;
  progress: number;
  progressInterval: NodeJS.Timeout | null;
  setStartTime: (time: number) => void;
  setUpdateTime: (time: number) => void;
  setProgress: (progress: number) => void;
  setProgressInterval: (interval: NodeJS.Timeout | null) => void;
  handleRestart: () => void;
  clearProgressInterval: () => void;
}

export const useFakeBlueScreen10Store = create<FakeBlueScreen10State>(
  (set, get) => ({
    startTime: 7,
    updateTime: 42,
    progress: 7,
    progressInterval: null,

    setStartTime: (time) => set({ startTime: time }),
    setUpdateTime: (time) => set({ updateTime: time }),
    setProgress: (progress) => set({ progress }),
    setProgressInterval: (interval) => set({ progressInterval: interval }),

    clearProgressInterval: () => {
      const { progressInterval } = get();
      if (progressInterval) {
        clearInterval(progressInterval);
        set({ progressInterval: null });
      }
    },

    handleRestart: () => {
      const { startTime, updateTime, clearProgressInterval } = get();
      clearProgressInterval();
      set({ progress: startTime });

      const interval = setInterval(
        () => {
          set((state) => {
            if (state.progress >= 100) {
              clearProgressInterval();
              return { progress: 100 };
            }
            return { progress: state.progress + 1 };
          });
        },
        (updateTime * 60 * 1000) / (100 - startTime),
      );

      set({ progressInterval: interval });
    },
  }),
);
