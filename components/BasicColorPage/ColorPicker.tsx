import colorStore from "@/store/colorStore";
import { usePathname } from "next/navigation";

export default function ColorPicker() {
  const { currentColor, setCurrentColor } = colorStore();
  const currentPath = usePathname();
  return (
    <div className={`w-full flex justify-start  items-center gap-6 ${currentPath === '/zoom-lighting' ? 'hidden' : ''} mt-2`}>
      <div className="relative inline-flex items-center">
        <label className="cursor-pointer">
          <span className="text-xl">🎨</span>
          <input
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
            className="absolute opacity-0 w-10 h-10 cursor-pointer"
          />
        </label>
      </div>

      <input
        type="text"
        value={currentColor}
        onChange={(e) => setCurrentColor(e.target.value)}
        className="w-24 rounded-md border border-gray-300 px-2 py-1 font-mono"
        placeholder="#FFFFFF"
      />
    </div>
  );
}
