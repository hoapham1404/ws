import { useTranslations } from "next-intl";
import { useHackerTyperStore } from "./hackerTyperStore";

const HackerSpeedInput = () => {
  const { speed, handleSpeedChange } = useHackerTyperStore();
  const t = useTranslations("settings.hacker");

  return (
    <div className="h-full flex flex-col gap-2  items-center">
      <span className="text-xl">{t("0")}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleSpeedChange(1)}
          className="font-bold w-8 h-8 flex items-center justify-center"
        >
          +
        </button>
        <input type="text" value={speed} onChange={(e) => handleSpeedChange(Number(e.target.value))} className="max-w-24 border border-black h-8 aspect-square text-center" />
        <button
          onClick={() => handleSpeedChange(-1)}
          className="font-bold w-8 h-8 flex items-center justify-center"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default HackerSpeedInput;
