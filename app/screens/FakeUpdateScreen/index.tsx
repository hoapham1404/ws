'use client'

import Header from '@/components/Header'
import BottomPanel from '@/components/Layout/BottomPanel'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import FakeUpdateWin10 from '@/components/FakeUpdateWin10/FakeUpdateWin10'
import { FakeUpdateScreenBottom } from './FakeUpdateScreenBottom'
import { usePathname } from 'next/navigation'
import FakeAndroidUpdate from '@/components/FakeAndroidUpdate/FakeAndroidUpdate'
import { FakeUpdateScreenLeft } from './FakeUpdateScreenLeft'
import FakeUpdateWin11 from '@/components/FakeUpdateWin11/FakeUpdateWin11'

export default function FakeUpdateScreen() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Header />
      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        {/* Left panel containing color selection options */}
        <LeftSidePanel>
          <FakeUpdateScreenLeft />
        </LeftSidePanel>
        
        {/* Main preview area showing the selected color */}
        <PreviewBox>
            {pathname === '/fake-update-windows-10' && <FakeUpdateWin10 />}
            {pathname === '/fake-android-update' && <FakeAndroidUpdate />}
            {pathname === '/fake-update-windows-11' && <FakeUpdateWin11 />}
        </PreviewBox>

        {/* Right panel containing color settings and controls */}
        <RightSidePanel>
        <div className="flex flex-col gap-4"></div>
        </RightSidePanel>

        {/* Bottom panel with screen navigation options */}
        <BottomPanel>
          <FakeUpdateScreenBottom />
        </BottomPanel>
      </main>
    </div>
  )
}
