"use client";

import { getRouteByPath } from "@/constants/routes";
import { colorStore } from "@/store/colorStore";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PreviewContent() {
  const pathName = usePathname();
  const route = getRouteByPath(pathName);

  const setCurrentColor = colorStore((state) => state.setCurrentColor)
  const currentColor = colorStore((state) => state.currentColor)

  useEffect(() => {
    if (route?.color) {
      setCurrentColor(route.color);
    }
  }, [route?.color, setCurrentColor]);

  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: currentColor }}
    >
    </div>
  );
}
