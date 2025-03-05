import { useFullScreen } from "../hooks/useFullScreen";

export default function FullScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, toggleFullscreen } = useFullScreen();

  return (
    <div ref={ref} onClick={toggleFullscreen} className="w-full h-full">
      {children}
    </div>
  );
}
