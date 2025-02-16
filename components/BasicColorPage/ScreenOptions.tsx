'use client'

import routes from '@/constants/routes';
import { useColorScreenStore } from '@/store/color_screen_store';


export default function ScreenOptions() {
  const setColor = useColorScreenStore(state => state.setColor)
  
  const handleFullScreen = () => {
    const previewBox = document.getElementById('preview-box');
    if (previewBox && previewBox.requestFullscreen) {
      previewBox.requestFullscreen();
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center mb-4 cursor-pointer ">
        {routes?.filter(option => option.isAxis === false && option.color != null && option.color != undefined).map((option) => (
          <div key={option.name} className="flex flex-col items-center p-6">
            <button
              onClick={() => setColor(option.color || '#ffffff')}
              className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: option.color }}
            ></button>
            <span className="mt-2 text-sm md:text-base">{option.name}</span>
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