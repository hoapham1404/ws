import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import sidebarStore from "@/components/Sidebar/useSidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { setIsPanelOpen } = sidebarStore();
  return (
    <div
      className={`${montserrat.className} mdl-js min-h-screen grid grid-cols-1`}
    >
      <Navbar />
      <div className="w-full" onClick={() => setIsPanelOpen(false)}>
        <main
          className="flex-1 max-w-screen-2xl mx-auto"
          onClick={() => setIsPanelOpen(false)}
        >
          {children}
        </main>
      </div>
      <Sidebar />
    </div>
  );
}
