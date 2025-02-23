"use client"
import { getRouteByPath } from "@/constants/routes";
import { usePathname } from "next/navigation";

export default function Header() {
  const currentPath = usePathname()
  const currentRoute = getRouteByPath(currentPath)

  return (
    <header className="text-center mb-12 mt-16">
      <h1 className="text-5xl ">{currentRoute?.name}</h1>
    </header>
  )
}
