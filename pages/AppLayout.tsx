import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (<div className={`${montserrat.className} mdl-js `}>
    <Navbar />
    <main className="max-w-screen-lg mx-auto">
      {children}
      <Sidebar />
    </main>
  </div>
  );
}
