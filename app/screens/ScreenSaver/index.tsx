'use client'

import Header from '@/components/Header'
import BottomPanel from '@/components/Layout/BottomPanel'
import LeftSidePanel from '@/components/Layout/LeftSidePanel'
import PreviewBox from '@/components/Layout/PreviewBox'
import RightSidePanel from '@/components/Layout/RightSidePanel'
import DVDScreensaver from '@/components/DVDSaver/DVDSaver'
import { DVDRights } from '@/components/DVDSaver/DVDRights'
import { useState } from 'react'
import { DVDBottom } from '@/components/DVDSaver/DVDBottom'
import { usePathname } from 'next/navigation'
import FlipClockPreview from '@/components/FlipClock/FlipClockPreview'
import NoSignalPreview from '@/components/NoSignalPage/NoSignalPreview'
import MotivationQuotesPreview from '@/components/MotivationQuotes/MotivationQuotesPreview'
import MotivationQuotesRight from '@/components/MotivationQuotes/MotivationQuotesRight'

export default function HomeScreenSaver() {
  const [speed, setSpeed] = useState(10)
  const [size, setSize] = useState(12)
  const [customQuoteText, setCustomQuoteText] = useState('')
  const [customQuoteAuthor, setCustomQuoteAuthor] = useState('')


  const currentPath = usePathname()
 

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
          {currentPath === '/dvd-screensaver' && <DVDScreensaver speed={speed} size={size+36} />}
          {currentPath === '/flip-clock' && <FlipClockPreview />}
          {currentPath === '/no-signal' && <NoSignalPreview />}
          {currentPath === '/motivational-quote' && <MotivationQuotesPreview paragraph={customQuoteText} author={customQuoteAuthor} textSize={size} />}
        </PreviewBox>

        {/* Right panel containing color settings and controls */}
        <RightSidePanel>
          {currentPath === '/dvd-screensaver' && (
            <DVDRights 
              speed={speed} 
              size={size} 
              onSpeedChange={setSpeed} 
              onSizeChange={setSize} 
            />
          )}
          {currentPath === '/motivational-quote' && (
            <MotivationQuotesRight
              size={size}
              onSizeChange={(e) => setSize(Number(e.target.value))}
              customQuoteText={customQuoteText}
              customQuoteAuthor={customQuoteAuthor}
              onCustomQuoteTextChange={(e) => setCustomQuoteText(e.target.value)}
              onCustomQuoteAuthorChange={(e) => setCustomQuoteAuthor(e.target.value)}
            />
          )}
        </RightSidePanel>

        {/* Bottom panel with screen navigation options */}
        <BottomPanel>
          <DVDBottom />
        </BottomPanel>
      </main>
    </div>
  )
}
