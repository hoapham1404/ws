"use client";

import { usePathname } from "next/navigation";
import { getRouteByPath } from "@/constants/routes";
import ResolutionOptions from "./ResolutionOptions";
import DownloadImageButton from "./DownloadImageButton";
import Temperature from "./Temperature";
import ColorPicker from "./ColorPicker";

export default function SettingsPanel() {
  const currentPath = usePathname();
  const currentRoute = getRouteByPath(currentPath);

  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="mb-4 ml-4 text-2xl ">{currentRoute?.name}</h3>
        <ResolutionOptions />
        <DownloadImageButton />

        {currentRoute?.path === "/zoom-lighting" ? (
          <Temperature />
        ) : (
          <ColorPicker />
        )}
      </div>
    </>
  );
}
