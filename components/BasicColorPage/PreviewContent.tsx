"use client";

import { getRouteByPath } from "@/constants/routes";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PreviewContent() {
  const pathName = usePathname();
  const route = getRouteByPath(pathName);



  return (
    <div
      className="w-full h-full"
      style={{ backgroundColor: "#FFFFFF" }}
    ></div>
  );
}
