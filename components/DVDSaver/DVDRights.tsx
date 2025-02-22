import React from 'react'

interface DVDRightsProps {
  speed: number
  size: number
  onSpeedChange: (speed: number) => void
  onSizeChange: (size: number) => void
}

export const DVDRights = ({ speed, size, onSpeedChange, onSizeChange }: DVDRightsProps) => {
    return (
        <div>
           <div className="w-full max-w-md mx-auto mb-4">
              <label className="block mb-2">Speed</label>
              <input
                type="range"
                min="0"
                max="100"
                value={speed}
                className="w-full h-[2px] bg-black appearance-none cursor-pointer"
                onChange={(e) => onSpeedChange(Number(e.target.value))}
              />
           </div>
           <div className="w-full max-w-md mx-auto mb-4">
              <label className="block mb-2">Size</label>
              <input
                type="range"
                min="0" 
                max="100"
                value={size}
                className="w-full h-[2px] bg-black appearance-none cursor-pointer"
                onChange={(e) => onSizeChange(Number(e.target.value))}
              />
           </div>
        </div>
    )
}