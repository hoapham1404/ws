import { create } from 'zustand';

interface SidebarState {
  currentTab: number;
  isPanelOpen: boolean;
  setCurrentTab: (tabId: number) => void;
  setIsPanelOpen: (isOpen: boolean) => void;
}
const sidebarStore = create<SidebarState>((set) => ({
  currentTab: 1,
  isPanelOpen: true,
  setCurrentTab: (tabId: number) => set({ currentTab: tabId }),
  setIsPanelOpen: (isOpen: boolean) => set({ isPanelOpen: isOpen }),
}));

export default sidebarStore;
