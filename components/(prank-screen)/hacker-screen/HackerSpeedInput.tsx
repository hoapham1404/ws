"use client";
import { useHackerTyperStore } from "./hackerTyperStore";

const HackerSpeedInput = () => {
  const { speed, handleSpeedChange } = useHackerTyperStore();

  return (
    <div className="flex items-center gap-2 justify-end">
      <span className="text-lg font-medium">Speed</span>
      <button
        onClick={() => handleSpeedChange(1)}
        className="bg-gray-200 text-black font-bold w-8 h-8 rounded hover:bg-gray-300 flex items-center justify-center"
      >
        +
      </button>
      <div className="bg-white text-black font-bold w-8 h-8 rounded flex items-center justify-center">
        {speed}
      </div>
      <button
        onClick={() => handleSpeedChange(-1)}
        className="bg-gray-200 text-black font-bold w-8 h-8 rounded hover:bg-gray-300 flex items-center justify-center"
      >
        -
      </button>
    </div>
  );
};

export default HackerSpeedInput;
