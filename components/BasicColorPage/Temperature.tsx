import { hexToRgb } from "@/lib/temperature";
import colorStore from "@/store/colorStore";
import { usePathname } from "next/navigation";
import React from "react";

export default function Temperature() {
  const currentPath = usePathname();
  const { currentColor, currentTemperature } = colorStore();
  const rgb = hexToRgb(currentColor);
  if (!rgb) return null;
  return (
    <section className={`${currentPath !== "/zoom-lighting" ? "hidden" : ""} w-full mt-4 flex flex-col gap-2`}>
      <div className="w-full flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">R:</label>
          <span>{rgb.r}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">G:</label>
          <span>{rgb.g}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">B:</label>
          <span>{rgb.b}</span>
        </div>
      </div>
    </section>
  )
}
