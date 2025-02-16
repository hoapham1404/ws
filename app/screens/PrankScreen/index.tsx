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
import { useRouteStore } from '@/store/store'

export default function Home() {

  const { currentRoute } = useRouteStore.getState()

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Header />
      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        <LeftSidePanel>
          <ColorOptions />
        </LeftSidePanel>

        <PreviewBox>
          <PreviewContent currentColor={currentRoute?.color || ''} />
        </PreviewBox>

        <RightSidePanel>
          <SettingsPanel currentColor={currentRoute?.color || ''} />
        </RightSidePanel>

        <BottomPanel>
          <ScreenOptions />
        </BottomPanel>
      </main>

    </div>
  )
}
