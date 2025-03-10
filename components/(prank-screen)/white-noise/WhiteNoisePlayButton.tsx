import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whiteNoiseStore } from "./whiteNoise";

export function WhiteNoisePlayButton() {
  const { isPlaying, togglePlay } = whiteNoiseStore();

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause" : "Play"}
        className="w-12 h-12  border border-gray-200 rounded-lg hover:bg-gray-50"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 text-gray-700" />
        ) : (
          <Play className="h-4 w-4 text-gray-700" />
        )}
      </Button>
    </div>
  );
}
