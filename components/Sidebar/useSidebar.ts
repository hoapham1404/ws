import { create } from 'zustand';

interface SidebarState {
  currentTab: number;
  setCurrentTab: (tabId: number) => void;
}
const sidebarStore = create<SidebarState>((set) => ({
  currentTab: 1,
  setCurrentTab: (tabId: number) => set({ currentTab: tabId }),
}));

export default sidebarStore;
