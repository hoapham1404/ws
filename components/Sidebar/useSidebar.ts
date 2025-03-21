import { create } from 'zustand';
interface SidebarState {
  currentTab?: string;
  setCurrentTab: (tab: string) => void;
}

const sidebarStore = create<SidebarState>(() => ({
  currentTab: undefined,
  setCurrentTab: (tab: string): void => {
    sidebarStore.setState({ currentTab: tab });
  }
}));

export default sidebarStore;
