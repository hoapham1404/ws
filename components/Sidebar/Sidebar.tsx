import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Navigation, Quote } from "lucide-react";
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen";
import SidebarTab from "./SidebarTab";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import sidebarStore from "./useSidebar";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function Sidebar() {
  const { isFullscreen } = useFullScreen();
  const raw = useTranslations();
  const { isPanelOpen, setIsPanelOpen, setCurrentTab } = sidebarStore();

  return (
    <div className="">
      {!isFullscreen && (
        <div
          className={cn(
            "fixed top-1/2 left-4 transform -translate-y-1/2 transition-all duration-300 ease-in-out",
            "z-10",
            "bg-white text-gray-900",
            "rounded-xl shadow-xl border",
            isPanelOpen ? "min-w-80" : "min-w-12 border-0",
          )}
        >
          <div className="  h-full max-h-[750px] ">
            {isPanelOpen && <SidebarTab />}

            {!isPanelOpen && (
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2  flex flex-col gap-2 shadow-sm shadow-gray-400 rounded-md py-2 bg-white">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          setIsPanelOpen(true);
                          setCurrentTab(1);
                        }}
                      >
                        <Navigation className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{raw("sidebar.links")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => {
                          setIsPanelOpen(true);
                          setCurrentTab(2);
                        }}
                      >
                        <Quote className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{raw("sidebar.uses")}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )}

            <button
              onClick={() => setIsPanelOpen(!isPanelOpen)}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-2xl z-20 transition-all duration-300 ease-in-out border"
            >
              {isPanelOpen ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
