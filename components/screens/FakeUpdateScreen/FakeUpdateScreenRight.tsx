import { useUpdateProgress } from '@/contexts/UpdateProgressContext';
import { useTranslations } from 'next-intl';

export const FakeUpdateScreenRight = () => {
  const { minutes, startPercentage, setMinutes, setStartPercentage, handleRestart } = useUpdateProgress();
  const t = useTranslations("settings.time")

  return (
    <div className="h-full flex flex-col justify-center items-center gap-2">
      <p className="text-xl">{t("0")}</p>
      <div className="flex gap-1 justify-center items-center">
        <input
          type="text"
          max="100"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="w-16 h-10 text-sm border-b border-black px-1 text-center"
        />
        <span>{t("2")}</span>
      </div>

      <p className="text-xl">{t("1")}</p>
      <div className="flex gap-1 justify-center items-center">
        <input
          type="text"
          min="0"
          max="100"
          value={startPercentage}
          onChange={(e) => setStartPercentage(Number(e.target.value))}
          className="w-16 h-10 text-sm border-b border-black px-1 text-center"
        />
        <span>%</span>
      </div>

      <button
        onClick={handleRestart}
        className="mt-2"
      >
        {t("3")}
      </button>
    </div>
  );
};
