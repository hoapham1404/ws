'use client'

import { useState } from 'react';
import routes from '@/constants/routes';
import { usePathname, useRouter } from 'next/navigation';

interface ScreenOptionsProps {
  onTemperatureChange: (temp: number) => void;
}

export default function ScreenOptions({ onTemperatureChange }: ScreenOptionsProps) {  
  const [sliderValue, setSliderValue] = useState(0);

  const handleFullScreen = () => {
    const previewBox = document.getElementById('preview-box');
    if (previewBox && previewBox.requestFullscreen) {
      previewBox.requestFullscreen();
    }
  };

  const currentPath = usePathname();

  const navigate = useRouter()

  const navigateTo = (path: string) => {
    navigate.push(path)
  }

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSliderValue(value);
    
    const temperature = 10000 + (value / 100) * (2100000 - 10000);
    onTemperatureChange(Math.round(temperature));
  };

  return (
    <>
      {currentPath === '/zoom-lighting' && (
        <div className="w-full max-w-md mx-auto mb-4">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            className="w-full h-[2px] bg-black appearance-none cursor-pointer"
            onChange={handleSliderChange}
          />
        </div>
      )}
    
      <div className="flex flex-wrap justify-center mb-4 cursor-pointer ">
        {routes?.filter(option => option.isAxis === false && option.color != null && option.color != undefined).map((option) => (
          <div key={option.name} className={`flex flex-col items-center p-6 ${option.path === currentPath ? 'bg-gray-300' : ''}`}>
            <button
              onClick={() => navigateTo(option.path)}
              className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: option.color }}
            ></button>
            <span className="mt-2 text-sm md:text-base underline">{option.name}</span>
          </div>
        ))}
      </div>
      
  
      <button 
        onClick={handleFullScreen}
        className="block mx-auto px-4 md:px-6 py-2 border rounded bg-white hover:bg-gray-50 text-sm md:text-base"
      >
        Open on all screens
      </button>
    </>
  )
} 