import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen"
import SidebarTab from "./SidebarTab"
import Image from "next/image";


export default function Sidebar() {
  const [isPanelOpen, setIsPanelOpen] = useState(true)
  const { isFullscreen } = useFullScreen()

  return (
    <div>
      {!isFullscreen &&
        <div
          className={cn(
            "fixed top-1/2 left-4 transform -translate-y-1/2 transition-all duration-300 ease-in-out",
            "z-10",
            "min-h-80 bg-white text-gray-900",
            "rounded-xl shadow-xl border",
            isPanelOpen ? "min-w-80" : "min-w-12",
          )}
        >
          {isPanelOpen && (
            <section className="p-4 flex flex-row justify-between items-center border-b">
              <p className="font-bold">Sidebar</p>
            </section>
          )}

          {isPanelOpen && (
            <section className="p-4">
              <SidebarTab />
            </section>
          )}

          {isPanelOpen && (
            <div className="p-2 text-sm text-center flex flex-col items-center justify-center gap-1">
              <p className="">
                {
                  Array.from(new Map([
                    ["/privacy-policy", "Privacy policy"],
                    ["/terms-and-conditions", "Terms & conditions"],
                    ["/contact-us", "Contact us"]
                  ]).entries()).map(([key, value]) => (
                    <a key={key} href={key} onClick={(e) => { e.preventDefault(); window.location.href = key }} className="mx-1
                    hover:underline transition-colors duration-300 ease-in-out
                    ">{value}</a>
                  ))
                }
              </p>
              <div className="flex flex-row justify-center items-center gap-1">
                <p className="">© 2025 WS, Made in US </p>
                <Image src="https://flagcdn.com/w320/us.png" alt="US Flag" className="inline-block" width={20} height={20} />
              </div>
            </div>
          )}

          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-2xl"
          >
            {isPanelOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      }
    </div >
  )
}
