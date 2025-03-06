import colorStore from "@/store/colorStore";

export default function TemperatureSlider() {
  const { currentTemperature, setTemperature } = colorStore();
  return (
    <div className="w-1/2 mx-auto">
      <input
        type="range"
        min={1000}
        max={12000}
        step={50}
        value={currentTemperature}
        onChange={(e) => setTemperature(Number(e.target.value))}
        className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-neutral-700 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-neutral-700"
      />
    </div>
  );
}
