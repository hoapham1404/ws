import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFakeBlueScreen10Store } from "./fakeBlueScreen10";
import { useTranslations } from "next-intl";

export default function FakeBlueScreen10_Sidebar() {
  const { updateTime, startTime, setUpdateTime, setStartTime, handleRestart } =
    useFakeBlueScreen10Store();
  const t = useTranslations("settings.time")

  return (
    <div className="h-full flex flex-col justify-center items-center gap-4">
      <p className="text-xl">{t("0")}</p>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          value={updateTime}
          onChange={(e) => setUpdateTime(Number(e.target.value))}
          min={1}
          className="border-gray-300 w-20"
        />
        <span className="">{t("2")}</span>
      </div>

      <div className="space-y-2">
        <p className="text-xl">{t("1")}</p>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            value={startTime}
            onChange={(e) => setStartTime(Number(e.target.value))}
            min={0}
            max={99}
            className="border-gray-300 w-20"
          />
          <span className="">%</span>
        </div>
      </div>

      <Button variant="outline" className="px-4 py-2 " onClick={handleRestart}>
        {t("3")}
      </Button>
    </div>
  );
}
