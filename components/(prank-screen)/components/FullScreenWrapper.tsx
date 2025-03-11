import { useFullScreen } from "../hooks/useFullScreen";
import { usePathname } from "next/navigation";
import { getRouteByPath } from "@/constants/routes";

export default function FullScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, toggleFullscreen, isFullscreen } = useFullScreen();
  const pathname = usePathname();
  const route = getRouteByPath(pathname);

  // Use the explicit iconColor from route, default to black
  const iconColor = route?.iconColor === "white" ? "#fff" : "#000";

  return (
    <div ref={ref} onClick={toggleFullscreen} className="w-full h-full relative">
      {children}
      {/* Fullscreen icon in bottom right corner */}
      <div className={`absolute bottom-2 right-2 ${isFullscreen ? "hidden" : ""}`}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Layer_1"></g><g id="fullscreen_x5F_alt"><g>
            <polygon points="29.414,26.586 22.828,20 20,22.828 26.586,29.414 24,32 32,32 32,24" style={{ fill: iconColor }}></polygon>
            <polygon points="2.586,5.414 9.172,12 12,9.172 5.414,2.586 8,0 0,0 0,8" style={{ fill: iconColor }}></polygon>
            <polygon points="26.586,2.586 20,9.172 22.828,12 29.414,5.414 32,8 32,0 24,0" style={{ fill: iconColor }}></polygon>
            <polygon points="12,22.828 9.172,20 2.586,26.586 0,24 0,32 8,32 5.414,29.414" style={{ fill: iconColor }}></polygon>
          </g></g>
        </svg>
      </div>
    </div>
  );
}
