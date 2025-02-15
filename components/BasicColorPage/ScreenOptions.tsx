'use client'

export default function ScreenOptions({ screenOptions, onColorChange }: { screenOptions: { name: string, color: string }[], onColorChange: (color: string) => void }) {
  return (
    <>
      <div className="flex justify-center gap-5 mb-4">
        {screenOptions.map((option) => (
          <div key={option.name} className="flex flex-col items-center">
            <button
              onClick={() => onColorChange(option.color)}
              className="w-32 h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: option.color }}
            ></button>
            <span className="mt-2">{option.name}</span>
          </div>
        ))}
      </div>
      <button className="block mx-auto px-6 py-2 border rounded bg-white hover:bg-gray-50">
        Open on all screens
      </button>
    </>
  )
} 