import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import NavigationSection from "./NavigationSection";
import TipsSection from "./TipsSection";
import sidebarStore from "./useSidebar";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      <div className="sticky top-0 bg-white z-10">
        <section className="p-4 flex flex-row justify-between items-center ">
          <p className="font-bold">{thead("name")}</p>
        </section>

        <div className="px-6 py-2 border-b">
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
        </div>
      </div>
      <div className="mt-4 px-2 h-[500px] overflow-y-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={cn(currentTab === tab.id ? "block" : "hidden")}
          >
            {tab.content}
          </div>
        ))}
        <div className="p-2 text-sm text-center flex flex-col items-center justify-center gap-1">
          <p className="">
            {Array.from(
              new Map([
                ["/privacy-policy", "Privacy policy"],
                ["/terms-and-conditions", "Terms & conditions"],
                ["/contact-us", "Contact us"],
              ]).entries(),
            ).map(([key, value]) => (
              <a
                key={key}
                href={key}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = key;
                }}
                className="mx-1
                    hover:underline transition-colors duration-300 ease-in-out
                    "
              >
                {value}
              </a>
            ))}
          </p>
          <div className="flex flex-row justify-center items-center gap-1">
            <p className="">© 2025 WS, Made in US </p>
            <Image
              src="https://flagcdn.com/w320/us.png"
              alt="US Flag"
              className="inline-block"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
