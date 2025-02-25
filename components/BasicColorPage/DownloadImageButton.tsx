import { colorStore } from "@/store/colorStore";
import downloadImage from "@/lib/downloadImage";

export default function DownloadImageButton() {
  const { currentResolution, currentColor } = colorStore((state) => state);
  return (
    <button
      onClick={() => downloadImage(currentResolution, currentColor)}
      className="w-full py-2 px-4 border rounded bg-white hover:bg-gray-50 mt-4"
    >
      Download
    </button>
  );
}
