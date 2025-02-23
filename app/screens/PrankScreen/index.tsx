'use client'

import FakeBlueScreen from '@/app/(prank-screen)/blue-screen-of-death-windows/components/FakeBlueScreen'
import Header from '@/components/Header'
import BottomPanel from '@/components/Layout/BottomPanel'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import NavigateBar from '@/app/(prank-screen)/components/NavigateBar'
import { usePathname } from 'next/navigation'

export default function PrankScreen() {

  const currentPath = usePathname();

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Header />
      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        {/* Left panel containing color selection options */}
        <LeftSidePanel>
          <div className="flex flex-col gap-4"></div>
        </LeftSidePanel>

        {/* Main preview area showing the selected color */}
        <PreviewBox>
          {currentPath === "/blue-screen-of-death-windows" && < />}
          {currentPath === "/blue-screen-of-death-windows-10" && <BlueScreenWindow10 />}
        </PreviewBox>

        {/* Right panel containing color settings and controls */}
        <RightSidePanel>
          <div className="flex flex-col gap-4"></div>
        </RightSidePanel>

        {/* Bottom panel with screen navigation options */}
        <BottomPanel>
          <NavigateBar />
        </BottomPanel>
      </main>
    </div>
  )
}
