'use client'
import { getRouteByPath } from "@/constants/routes";
import { colorStore } from "@/store/colorStore"
import { usePathname } from "next/navigation";
import ResolutionOptions from "./ResolutionOptions";
import Temperature from "./Temperature";


export default function SettingsPanel() {
  const currentPath = usePathname();
  const currentRoute = getRouteByPath(currentPath);
  const { setCurrentColor, setTemperature, setResolution } = colorStore();

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="mb-4 ml-4 text-2xl ">{currentRoute?.name}</h3>
        <ResolutionOptions />

        <Temperature />
      </div>
    </>
  )
}
