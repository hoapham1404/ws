import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFakeBlueScreen10Store } from "./fakeBlueScreen10";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function FakeBlueScreen10_Sidebar() {
  const { updateTime, startTime, setUpdateTime, setStartTime, handleRestart } =
    useFakeBlueScreen10Store();
  const t = useTranslations("settings.time")

  return (
    <div className="w-48 space-y-6">
      <div className="space-y-2">
        <Label>{t("0")}</Label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={updateTime}
            onChange={(e) => setUpdateTime(Number(e.target.value))}
            min={1}
            className="w-20"
          />
          <span className="text-sm text-muted-foreground">{t("2")}</span>
        </div>
      </div>

      <div className="space-y-2">
        <Label>{t("1")}</Label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={startTime}
            onChange={(e) => setStartTime(Number(e.target.value))}
            min={0}
            max={99}
            className="w-20"
          />
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>

      <Button className="w-full" onClick={handleRestart}>
        {t("3")}
      </Button>
    </div>
  );
}
