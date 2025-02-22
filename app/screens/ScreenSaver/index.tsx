'use client'

import Header from '@/components/Header'
import BottomPanel from '@/components/Layout/BottomPanel'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import DVDScreensaver from '@/components/DVDSaver/DVDSaver'
import { DVDRights } from '@/components/DVDSaver/DVDRights'
import { useState } from 'react'

export default function HomeScreenSaver() {
  const [speed, setSpeed] = useState(50)
  const [size, setSize] = useState(50)

  return (
    <div className="min-h-screen p-3 md:p-5 bg-white text-black">
      <Header />
      <main className="max-w-7xl mx-auto relative flex flex-col md:block">
        {/* Left panel containing color selection options */}
        <LeftSidePanel>
          <div className="flex flex-col gap-4">Item left</div>
        </LeftSidePanel>
        
        {/* Main preview area showing the selected color */}
        <PreviewBox>
          <DVDScreensaver speed={speed} size={size} />
        </PreviewBox>

        {/* Right panel containing color settings and controls */}
        <RightSidePanel>
          <DVDRights 
            speed={speed} 
            size={size} 
            onSpeedChange={setSpeed} 
            onSizeChange={setSize} 
          />
        </RightSidePanel>

        {/* Bottom panel with screen navigation options */}
        <BottomPanel>
          <div className="flex flex-col gap-4">Item bottom</div>
        </BottomPanel>
      </main>
    </div>
  )
}
