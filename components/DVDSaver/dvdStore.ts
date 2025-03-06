import { create } from "zustand"

type DVDState = {
  speed: number
  size: number

  setSpeed: (speed: number) => void
  setSize: (size: number) => void
}

const useDVDStore = create<DVDState>((set) => ({
  speed: 50,
  size: 50,
  setSpeed: (speed) => set({ speed }),
  setSize: (size) => set({ size }),
}))

export default useDVDStore
