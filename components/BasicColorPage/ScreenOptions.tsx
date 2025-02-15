'use client'

export default function ScreenOptions({ screenOptions, onColorChange }: { screenOptions: { name: string, color: string }[], onColorChange: (color: string) => void }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-4">
        {screenOptions.map((option) => (
          <div key={option.name} className="flex flex-col items-center">
            <button
              onClick={() => onColorChange(option.color)}
              className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: option.color }}
            ></button>
            <span className="mt-2 text-sm md:text-base">{option.name}</span>
          </div>
        ))}
      </div>
      <button className="block mx-auto px-4 md:px-6 py-2 border rounded bg-white hover:bg-gray-50 text-sm md:text-base">
        Open on all screens
      </button>
    </>
  )
} 