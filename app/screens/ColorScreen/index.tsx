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
import { getRouteByPath } from '@/constants/routes'
import { usePathname } from 'next/navigation'

export default function Home() {
  const currentPath = usePathname()
  const currentRoute = getRouteByPath(currentPath)

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Header />
      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        {/* Left panel containing color selection options */}
        <LeftSidePanel>
        <ColorOptions />
        </LeftSidePanel>
        
        {/* Main preview area showing the selected color */}
        <PreviewBox>
          <PreviewContent currentColor={currentRoute?.color || ''} />
        </PreviewBox>

        {/* Right panel containing color settings and controls */}
        <RightSidePanel>
          <SettingsPanel currentColor={currentRoute?.color || ''} />
        </RightSidePanel>

        {/* Bottom panel with screen navigation options */}
        <BottomPanel>
          <ScreenOptions />
        </BottomPanel>
      </main>
    </div>
  )
}
