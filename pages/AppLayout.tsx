import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenTip from "@/components/ScreenTip/ScreenTip";
import Header from "@/components/Header";

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
      <main className="flex-1 max-w-screen-xl mx-auto">
        <Header />
        <div className="min-h-screen">{children}</div>
        <ScreenTip />
      </main>
      <Footer />
    </div>
  );
}
