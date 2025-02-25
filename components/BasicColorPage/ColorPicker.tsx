import { colorStore } from "@/store/colorStore";

export default function ColorPicker() {
  const { currentColor, setCurrentColor } = colorStore();
  return (
    <div className="flex items-center gap-2">
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
        className="border border-gray-300 rounded "
        placeholder="#FFFFFF"
      />
    </div>
  );
}
