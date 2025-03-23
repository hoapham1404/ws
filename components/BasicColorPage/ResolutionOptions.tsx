import colorStore from "@/store/colorStore";

export default function ResolutionOptions() {
  const { currentResolution, setResolution, setPresetResolution } =
    colorStore();

  return (
    <div className="flex flex-col gap-4">
      {/* Preset Selection */}
      <select
        className="w-full bg-transparent"
        onChange={(e) =>
          setPresetResolution(
            e.target.value as
            | "480p"
            | "720p"
            | "1080p"
            | "1440p 2K"
            | "2160p 4K"
            | "4320p 8K",
          )
        }
        defaultValue="1080p"
      >
        <option value="480p">480p</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
        <option value="1440p 2K">1440p 2K</option>
        <option value="2160p 4K">2160p 4K</option>
        <option value="4320p 8K">4320p 8K</option>
      </select>

      {/* Custom Resolution Inputs */}
      <div className="flex justify-between">
        <div>
          <input
            type="text"
            value={currentResolution.resX}
            onChange={(e) =>
              setResolution(Number(e.target.value), currentResolution.resY)
            }
            className="w-20 p-2 border rounded"
          />
          <span className="ml-2 self-center">px</span>
        </div>
        <div>
          <input
            type="text"
            value={currentResolution.resY}
            onChange={(e) =>
              setResolution(currentResolution.resX, Number(e.target.value))
            }
            className="w-20 p-2 border rounded"
          />
          <span className="ml-2 self-center">px</span>
        </div>
      </div>
    </div>
  );
}
