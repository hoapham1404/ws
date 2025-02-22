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
import { getRouteByPath } from '@/constants/routes'
import { usePathname } from 'next/navigation'

// Helper function to calculate RGB from temperature
const calculateRGB = (temperature: number) => {
  // Approximate RGB values based on temperature (Kelvin)
  let r, g, b;
  
  // Temperature should be between 1000 and 40000
  temperature = Math.max(1000, Math.min(40000, temperature)) / 100;
  
  // Red calculation
  if (temperature <= 66) {
    r = 255;
  } else {
    r = temperature - 60;
    r = 329.698727446 * Math.pow(r, -0.1332047592);
    r = Math.max(0, Math.min(255, r));
  }
  
  // Green calculation
  if (temperature <= 66) {
    g = temperature;
    g = 99.4708025861 * Math.log(g) - 161.1195681661;
  } else {
    g = temperature - 60;
    g = 288.1221695283 * Math.pow(g, -0.0755148492);
  }
  g = Math.max(0, Math.min(255, g));
  
  // Blue calculation
  if (temperature >= 66) {
    b = 255;
  } else if (temperature <= 19) {
    b = 0;
  } else {
    b = temperature - 10;
    b = 138.5177312231 * Math.log(b) - 305.0447927307;
    b = Math.max(0, Math.min(255, b));
  }
  
  return {
    r: Math.round(r),
    g: Math.round(g),
    b: Math.round(b)
  };
};

export default function Home() {
  const currentPath = usePathname()
  const currentRoute = getRouteByPath(currentPath)
  
  const [temperature, setTemperature] = useState(6500)
  const [rgb, setRgb] = useState(() => calculateRGB(6500)) // Initialize with calculated value

  const handleTemperatureChange = (newTemp: number) => {
    setTemperature(newTemp)
    setRgb(calculateRGB(newTemp))
  }

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
          <SettingsPanel 
            currentColor={currentRoute?.color || ''} 
            temperature={temperature}
            rgb={rgb}
            onTemperatureChange={handleTemperatureChange}
          />
        </RightSidePanel>

        {/* Bottom panel with screen navigation options */}
        <BottomPanel>
          <ScreenOptions onTemperatureChange={handleTemperatureChange} />
        </BottomPanel>
      </main>
    </div>
  )
}
