'use client'

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
import { useColorScreenStore } from '@/store/color_screen_store'

export default function Home() {
  const { currentColor, title, colorOptions, screenOptions, setColor } = useColorScreenStore()

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Header title={title} />

      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        <LeftSidePanel>
          <ColorOptions colorOptions={colorOptions} onColorChange={setColor} />
        </LeftSidePanel>

        <PreviewBox>
          <PreviewContent currentColor={currentColor} />
        </PreviewBox>

        <RightSidePanel>
          <SettingsPanel currentColor={currentColor} />
        </RightSidePanel>

        <BottomPanel>
          <ScreenOptions screenOptions={screenOptions} onColorChange={setColor} />
        </BottomPanel>
      </main>
    </div>
  )
}
