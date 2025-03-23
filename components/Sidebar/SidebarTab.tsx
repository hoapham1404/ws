import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import NavigationSection from "./NavigationSection";
import TipsSection from "./TipsSection";
import sidebarStore from "./useSidebar";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function SidebarTab(): JSX.Element {
  const { currentTab, setCurrentTab } = sidebarStore();
  const t = useTranslations("sidebar");
  const pathName = usePathname();
  const thead = useTranslations(pathName);
  const tabs: { id: number; name: string; content: JSX.Element }[] = [
    {
      id: 1,
      name: t("links"),
      content: <NavigationSection />,
    },
    {
      id: 2,
      name: t("uses"),
      content: <TipsSection />,
    },
  ];

  return (
    <div>
      <section className="p-4 flex flex-row justify-between items-center border-b">
        <p className="font-bold">{thead("name")}</p>
      </section>

      <div
        className={cn(
          "flex flex-row justify-between items-center",
          "border rounded-xl",
          "text-sm overflow-hidden",
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={cn(
              "flex-1 text-center",
              "p-2 cursor-pointer",
              "transition-all duration-300 ease-in-out",
              "border-b",
              currentTab === tab.id
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300",
            )}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(currentTab === tab.id ? "block" : "hidden")}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
