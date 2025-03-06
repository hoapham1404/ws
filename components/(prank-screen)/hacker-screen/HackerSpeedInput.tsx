import { useHackerTyperStore } from "./hackerTyperStore";

const HackerSpeedInput = () => {
  const { speed, handleSpeedChange } = useHackerTyperStore();

  return (
    <div className="h-full flex flex-col gap-2  items-center">
      <span className="text-xl">Speed</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleSpeedChange(1)}
          className="bg-gray-200 text-black font-bold w-8 h-8 rounded hover:bg-gray-300 flex items-center justify-center"
        >
          +
        </button>
        <input type="text" value={speed} onChange={(e) => handleSpeedChange(Number(e.target.value))} className="border border-black h-8 aspect-square text-center" />
        <button
          onClick={() => handleSpeedChange(-1)}
          className="bg-gray-200 text-black font-bold w-8 h-8 rounded hover:bg-gray-300 flex items-center justify-center"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default HackerSpeedInput;
