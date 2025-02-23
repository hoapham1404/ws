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
  // Use temperature as a seed for variation
  const normalizedTemp = (temperature - 1000) / 39000; // 0 to 1 range
  
  // Generate base colors using sine waves for smooth transitions but varied colors
  const r = Math.sin(normalizedTemp * Math.PI * 4) * 127 + 128;
  const g = Math.sin((normalizedTemp * Math.PI * 4) + (Math.PI / 2)) * 127 + 128;
  const b = Math.sin((normalizedTemp * Math.PI * 4) + Math.PI) * 127 + 128;

  // Add some variation based on temperature ranges
  const variation = Math.sin(temperature / 1000) * 30;
  
  // Apply different color emphasis based on temperature ranges
  let finalR = r, finalG = g, finalB = b;

  if (temperature < 5000) {
    // Warmer colors
    finalR = Math.min(255, r * 1.3 + variation);
    finalG = Math.max(0, g * 0.9 - variation);
    finalB = Math.max(0, b * 0.7 - variation);
  } else if (temperature > 15000) {
    // Cooler colors
    finalR = Math.max(0, r * 0.7 - variation);
    finalG = Math.max(0, g * 0.9 + variation);
    finalB = Math.min(255, b * 1.3 + variation);
  } else {
    // Mid range - more balanced colors
    finalR = r + variation;
    finalG = g + variation;
    finalB = b + variation;
  }

  // Add some periodic variation
  const periodicVariation = Math.sin(temperature / 500) * 20;
  finalR += periodicVariation;
  finalG += periodicVariation;
  finalB += periodicVariation;

  // Ensure values stay within bounds and round them
  return {
    r: Math.round(Math.max(0, Math.min(255, finalR))),
    g: Math.round(Math.max(0, Math.min(255, finalG))),
    b: Math.round(Math.max(0, Math.min(255, finalB)))
  };
};

// Add this helper function to convert RGB to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}

export default function Home() {
  const currentPath = usePathname()
  const currentRoute = getRouteByPath(currentPath)
  
  const [temperature, setTemperature] = useState(5000)
  const [rgb, setRgb] = useState(() => calculateRGB(5000))

  // Calculate the current color based on RGB values
  const currentColor = rgbToHex(rgb.r, rgb.g, rgb.b)

  const handleTemperatureChange = (newTemp: number) => {
    // Add some randomization to the temperature for even more variation
    const randomOffset = Math.random() * 1000 - 500; // ±500 variation
    const adjustedTemp = newTemp + randomOffset;
    
    console.log('Temperature changed to:', adjustedTemp)
    setTemperature(adjustedTemp)
    const newRgb = calculateRGB(adjustedTemp)
    console.log('New RGB:', newRgb)
    setRgb(newRgb)
    console.log('New color:', rgbToHex(newRgb.r, newRgb.g, newRgb.b))
  }

  // Add console log to track what color is being passed to PreviewContent
  console.log('Rendering with color:', currentRoute?.color || currentColor)

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
          <PreviewContent currentColor={currentPath === '/zoom-lighting' ? currentColor : currentRoute?.color || currentColor} />
        </PreviewBox>

        {/* Right panel containing color settings and controls */}
        <RightSidePanel>
          <SettingsPanel 
            currentColor={currentPath === '/zoom-lighting' ? currentColor : currentRoute?.color || currentColor}
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
