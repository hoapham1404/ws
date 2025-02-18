"use client"
import { useRef, useState, useEffect } from "react"
import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import localFont from "next/font/local"


const lucidaConsole = localFont({
  src:"./Lucida_Console_V2.woff2",
  variable: "--font-lucida-console",
})
export default function FakeBlueScreen() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Fake Blue Screen of Death</h1>

      <div ref={containerRef} className={`relative mb-8 ${isFullscreen ? "" : "aspect-video"}`}>
        <div
          className={`w-full h-full rounded-lg shadow-lg bg-[#000A7C] ${isFullscreen ? "fixed inset-0 z-50" : ""
            } ${lucidaConsole.variable} font-mono`}
        >
          <div
            className={`text-white whitespace-pre-line ${isFullscreen
              ? "absolute inset-0 flex items-center justify-center text-2xl p-16 leading-relaxed"
              : "p-8 text-base leading-relaxed"
              }`}
          >
            {`A problem has been detected and Windows has been shut down to prevent damage to your computer.

The problem seems to be caused by the following file: SPCMDCON.SYS
PAGE_FAULT_IN_NONPAGED_AREA

If this is the first time you've seen this stop error screen, restart your computer. If this
screen appears again, follow these steps:

Check to make sure any new hardware or software is properly installed. If this is a new
installation, ask your hardware or software manufacturer for any Windows updates you might
need.

If problems continue, disable or remove any newly installed hardware or software. Disable
BIOS memory options such as caching or shadowing. If you need to use safe mode to remove or
disable components, restart your computer, press F8 to select advanced startup options, and
then select Safe Mode.

Technical information:

*** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)

*** SPCMDCON.SYS - Address FBFE7617 base at FBFE5000, DateStamp 3d6dd67c`}
          </div>
        </div>
        <Button
          size="icon"
          variant="secondary"
          className={`${isFullscreen ? "fixed right-4 bottom-4 z-50" : "absolute right-4 bottom-4"}`}
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>
    </main>
  )
}
