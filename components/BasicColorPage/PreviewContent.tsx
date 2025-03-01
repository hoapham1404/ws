'use client'
import { colorStore } from "@/store/colorStore";

export default function PreviewContent() {
  const { currentColor } = colorStore();
  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: currentColor }}
    ></div>
  )
}
