'use client'

export default function PreviewContent({ currentColor }: { currentColor: string } ) {
  console.log('PreviewContent rendering with color:', currentColor)
  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: currentColor }}
    ></div>
  )
} 