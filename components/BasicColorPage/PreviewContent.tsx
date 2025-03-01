'use client'
import { getRouteByPath } from "@/constants/routes";
import { colorStore } from "@/store/colorStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PreviewContent() {
  const { currentColor, setCurrentColor } = colorStore();
  const currentPath = usePathname();
  const currentRoute = getRouteByPath(currentPath);


  useEffect(() => {
    if (currentRoute?.type === "color") {
      setCurrentColor(currentRoute.color ?? "#000000");
    }
  }, [currentRoute]);
  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: currentColor }}
    ></div>
  )
}
