import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import NavigationScreen from "@/components/NavigationScreen";
import ScreenTip from "@/components/ScreenTip/ScreenTip";
import Footer from "@/components/Footer";

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
      <NavigationScreen />
      <ScreenTip />
    </main>
    <Footer />
  </div>
  );
}
