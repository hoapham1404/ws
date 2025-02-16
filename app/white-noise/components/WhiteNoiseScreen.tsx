
"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const effects = [
  { id: "white-noise", name: "White Noise", color: "bg-gray-200" },
  { id: "broken", name: "Broken Screen", color: "bg-gray-900" },
  { id: "xp", name: "Screen of Death XP", color: "bg-blue-600" },
  { id: "win10", name: "Screen of Death 10", color: "bg-blue-500" },
  { id: "hacker", name: "Hacker Typer", color: "bg-black" },
]

export default function WhiteNoiseScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const gainNodeRef = useRef<GainNode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentEffect, setCurrentEffect] = useState("white-noise")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number

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

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  useEffect(() => {
    if (isPlaying) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
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
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [isPlaying])

  return (
    <div className="min-h-screen bg-white p-8">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">White noise</h1>

        <div className="relative mb-8">
          <canvas
            ref={canvasRef}
            width={800}
            height={400}
            className="w-full rounded-lg shadow-lg"
            style={{
              boxShadow: "0 0 40px rgba(255, 166, 0, 0.2)",
            }}
          />
          <Button
            size="icon"
            variant="secondary"
            className="absolute right-4 top-4"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
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

