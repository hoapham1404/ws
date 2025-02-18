"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const effects = [
  { id: "white-noise", name: "White Noise", color: "bg-gray-200" },
  { id: "broken", name: "Broken Screen", color: "bg-gray-900" },
  { id: "xp", name: "Screen of Death XP", color: "bg-blue-600" },
  { id: "win10", name: "Screen of Death 10", color: "bg-blue-500" },
  { id: "hacker", name: "Hacker Typer", color: "bg-black" },
]

export default function WhiteNoisePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentEffect, setCurrentEffect] = useState("white-noise")
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

    // Function to draw white noise on the canvas
    const drawNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255
        data[i] = noise // red
        data[i + 1] = noise // green
        data[i + 2] = noise // blue
        data[i + 3] = 255 // alpha
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(drawNoise)
    }

    drawNoise()

    // Cleanup function to cancel the animation frame
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current || !containerRef.current) return
      canvasRef.current.width = containerRef.current.clientWidth
      canvasRef.current.height = containerRef.current.clientHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      try {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)()
        gainNodeRef.current = audioContextRef.current.createGain()
        const bufferSize = 4096
        const whiteNoise = audioContextRef.current.createScriptProcessor(bufferSize, 1, 1)

        whiteNoise.onaudioprocess = (e) => {
          const output = e.outputBuffer.getChannelData(0)
          for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1
          }
        }

        gainNodeRef.current.gain.value = 0.1 // Reduce volume
        whiteNoise.connect(gainNodeRef.current)
        gainNodeRef.current.connect(audioContextRef.current.destination)
      } catch (error) {
        console.error("Error initializing AudioContext:", error)
      }
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close()
        audioContextRef.current = null
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
        audioContextRef.current = null
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  return (
    <div className="min-h-screen bg-white p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">White noise</h1>

        <div ref={containerRef} className="relative mb-8 aspect-video">
          <canvas
            ref={canvasRef}
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              boxShadow: "0 0 40px rgba(255, 166, 0, 0.2)",
            }}
          />
          <div className="absolute right-4 top-4 flex gap-2">
            <Button size="icon" variant="secondary" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause" : "Play"}>
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>
          <Button size="icon" variant="secondary" className="absolute right-4 bottom-4" onClick={toggleFullscreen} aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}>
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>

        <Tabs defaultValue="white-noise" className="w-full" value={currentEffect} onValueChange={setCurrentEffect}>
          <TabsList className="grid grid-cols-5 gap-4">
            {effects.map((effect) => (
              <TabsTrigger
                key={effect.id}
                value={effect.id}
                className="relative h-24 data-[state=active]:border-orange-200 data-[state=active]:shadow-orange-100"
              >
                <div className={`absolute inset-2 rounded ${effect.color}`} />
                <span className="absolute bottom-1 text-xs font-medium">{effect.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </main>
    </div>
  )
}
