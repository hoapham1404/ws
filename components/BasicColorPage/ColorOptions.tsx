'use client'

export default function ColorOptions({ colorOptions, onColorChange }: { colorOptions: { name: string, color: string }[], onColorChange: (color: string) => void }) {
  return (
    <>
      {colorOptions.map((option) => (
        <button
          key={option.name}
          onClick={() => onColorChange(option.color)}
          className="flex items-center gap-2 w-full md:w-80 px-4 py-2 text-left rounded hover:opacity-90 underline"
        >
          <div
            className="w-12 md:w-14 h-8 rounded"
            style={{ 
              backgroundColor: option.color,
              boxShadow: `0 0 16px 0 rgba(0, 0, 0, 0.3)`
            }}
          ></div>
          <span>{option.name}</span>
        </button>
      ))}
    </>
  )
} 