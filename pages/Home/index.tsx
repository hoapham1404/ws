'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import BottomPanel from '@/components/Layout/BottomPanel'
import ColorOptions from '@/components/BasicColorPage/ColorOptions'
import PreviewContent from '@/components/BasicColorPage/PreviewContent'
import SettingsPanel from '@/components/BasicColorPage/SettingsPanel'
import ScreenOptions from '@/components/BasicColorPage/ScreenOptions'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentColor, setCurrentColor] = useState('#FFFFFF')
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  // Ensure hydration matching
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until client-side
  if (!mounted) {
    return null
  }

  const colorOptions = [
    { name: 'Yellow screen', color: '#ffff00' },
    { name: 'Orange screen', color: '#ffa500' },
    { name: 'Pink screen', color: '#ffc0cb' },
    { name: 'Purple screen', color: '#800080' },
    { name: 'Zoom Lighting', color: '#fff5e6' },
  ]

  const screenOptions = [
    { name: 'White screen', color: '#ffffff' },
    { name: 'Black screen', color: '#000000' },
    { name: 'Red screen', color: '#ff0000' },
    { name: 'Green screen', color: '#00ff00' },
    { name: 'Blue screen', color: '#0000ff' },
  ]

  const handleColorChange = (color: string) => {
    setCurrentColor(color)
  }

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Navbar />
      <Header title="Yellow screen" />

      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        <LeftSidePanel>
          <ColorOptions colorOptions={colorOptions} onColorChange={handleColorChange} />
        </LeftSidePanel>

        <PreviewBox>
          <PreviewContent currentColor={currentColor} />
        </PreviewBox>

        <RightSidePanel>
          <SettingsPanel dimensions={dimensions} setDimensions={setDimensions} />
        </RightSidePanel>

        <BottomPanel>
          <ScreenOptions screenOptions={screenOptions} onColorChange={handleColorChange} />
        </BottomPanel>
      </main>
    </div>
  )
} 