import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen"
import SidebarTab from "./SidebarTab"

const zIndex = 20

export default function Sidebar() {
  const [isPanelOpen, setIsPanelOpen] = useState(true)
  const { isFullscreen } = useFullScreen()

  return (
    <div>
      {!isFullscreen &&
        <div
          className={cn(
            "fixed top-1/2 left-4 transform -translate-y-1/2 transition-all duration-300 ease-in-out",
            `z-[${zIndex}]`,
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

          <button
            onClick={() => setIsPanelOpen(!isPanelOpen)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm"
          >
            {isPanelOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      }
    </div>
  )
}
