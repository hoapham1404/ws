import { cn } from "@/lib/utils";
import React, { JSX } from "react";
import NavigationSection from "./NavigationSection";

const tabs: { id: number, name: string; content: JSX.Element }[] = [
  {
    id: 1,
    name: "Links",
    content: <NavigationSection />,
  },
  {
    id: 2,
    name: "Uses",
    content: <div>Tab 2 content</div>,
  }
];

export default function SidebarTab(): JSX.Element {
  const [currentTab, setCurrentTab] = React.useState<number>(1);


  return (
    <div>
      <div className={cn("flex flex-row justify-between items-center", "border rounded-xl", "text-sm overflow-hidden")}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            className={cn(
              "flex-1 text-center",
              "p-2 cursor-pointer",
              "transition-all duration-300 ease-in-out",
              currentTab === tab.id && "bg-gray-100"
            )}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="mt-4">

        {
          tabs.map((tab) => (
            <div key={tab.id} className={cn(currentTab === tab.id ? "block" : "hidden")}>
              {tab.content}
            </div>
          ))
        }
      </div>
    </div>
  );
}
