'use client'

import { useState } from 'react'
import ColorOptions from '@/components/BasicColorPage/ColorOptions'
import PreviewContent from '@/components/BasicColorPage/PreviewContent'
import ScreenOptions from '@/components/BasicColorPage/ScreenOptions'
import SettingsPanel from '@/components/BasicColorPage/SettingsPanel'
import Header from '@/components/Header'
import BottomPanel from '@/components/Layout/BottomPanel'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import Navbar from '@/components/Navbar'

export default function Home() {
  const [currentColor, setCurrentColor] = useState('#ffffff')
  const [title, setTitle] = useState('White screen')

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
    const option = [...colorOptions, ...screenOptions].find(opt => opt.color === color)
    setCurrentColor(color)
    setTitle(option?.name || 'Custom color')
  }

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Navbar />
      <Header title={title} />

      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        <LeftSidePanel>
          <ColorOptions colorOptions={colorOptions} onColorChange={handleColorChange} />
        </LeftSidePanel>

        <PreviewBox>
          <PreviewContent currentColor={currentColor} />
        </PreviewBox>

        <RightSidePanel>
          <SettingsPanel currentColor={currentColor} />
        </RightSidePanel>

        <BottomPanel>
          <ScreenOptions screenOptions={screenOptions} onColorChange={handleColorChange} />
        </BottomPanel>
      </main>
    </div>
  )
} 