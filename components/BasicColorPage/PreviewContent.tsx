'use client'

export default function PreviewContent({ currentColor }: { currentColor: string } ) {
  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: currentColor }}
    ></div>
  )
} 