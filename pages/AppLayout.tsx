import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${montserrat.className} mdl-js min-h-screen grid grid-cols-1`}
    >
      <Navbar />
      <main className="flex-1 max-w-screen-2xl mx-auto">{children}</main>
      <Sidebar />
    </div>
  );
}
