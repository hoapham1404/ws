import localFont from "next/font/local"
import Image from "next/image"
import deathWindow from "@/public/death-window.png"

const lucidaConsole = localFont({
  src: "./Lucida_Console_V2.woff2",
  variable: "--font-lucida-console",
})

export default function FakeBlueScreen() {
  const isFullscreen = false
  return (
    <div
      className={`w-full h-full rounded-lg shadow-lg bg-[#0078D7] ${
        isFullscreen ? "fixed inset-0 z-50" : ""
      } ${lucidaConsole.variable} font-mono relative`}
    >
      <Image 
        src={deathWindow}
        alt="Blue Screen of Death"
        fill
        className="object-cover"
        priority
      />
      <div
        className={`text-white whitespace-pre-line ${
          isFullscreen
            ? "absolute inset-0 flex items-center justify-center text-2xl p-16 leading-relaxed"
            : "p-4 text-[0.4rem] leading-relaxed"
        }`}
      >
        {``}
      </div>
    </div>
  )
}
