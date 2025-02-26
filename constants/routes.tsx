// constants/routes.ts

import FakeBlueScreen10 from "@/app/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10";
import FakeBlueScreen10_Sidebar from "@/app/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10_Sidebar";
import FakeBlueScreen from "@/app/(prank-screen)/blue-screen-of-death-windows/FakeBlueScreen";
import BrokenScreen from "@/app/(prank-screen)/broken-screen/BrokenScreen";
import NavigateBar from "@/app/(prank-screen)/components/NavigateBar";
import { WhiteNoisePlayButton } from "@/app/(prank-screen)/white-noise/WhiteNoisePlayButton";
import WhiteNoiseScreen from "@/app/(prank-screen)/white-noise/WhiteNoiseScreen";
import { ReactNode } from "react";

export class RouteStore {
  name: string;
  path: string;
  color?: string;
  icon?: string;
  isAxis?: boolean;
  title: string;
  type: "color" | "prank" | "fake-update" | "screensaver";
  components?: {
    left?: ReactNode;
    mid?: ReactNode;
    right?: ReactNode;
    bottom?: ReactNode;
  };

  constructor(
    name: string,
    path: string,
    title: string,
    type: "color" | "prank" | "fake-update" | "screensaver",
    color?: string,
    icon?: string,
    isAxis?: boolean,
  ) {
    this.name = name;
    this.path = path;
    this.color = color;
    this.icon = icon;
    this.isAxis = isAxis;
    this.title = title;
    this.type = type;
  }
}

export const routes: RouteStore[] = [
  // Color Screens
  {
    name: "White Screen",
    path: "/",
    color: "#FFFFFF",
    isAxis: false,
    title: "White screen",
    type: "color",
  },
  {
    name: "Black Screen",
    path: "/black-screen",
    color: "#000000",
    isAxis: false,
    title: "Full Black Screen",
    type: "color",
  },
  {
    name: "Red Screen",
    path: "/red-screen",
    color: "#FF0000",
    isAxis: false,
    title: "Red screen",
    type: "color",
  },
  {
    name: "Green Screen",
    path: "/green-screen",
    color: "#00FF00",
    isAxis: false,
    title: "Green screen",
    type: "color",
  },
  {
    name: "Blue Screen",
    path: "/blue-screen",
    color: "#0000FF",
    isAxis: false,
    title: "Blue screen",
    type: "color",
  },
  {
    name: "Yellow Screen",
    path: "/yellow-screen",
    color: "#FFFF00",
    isAxis: true,
    title: "Yellow screen",
    type: "color",
  },
  {
    name: "Orange Screen",
    path: "/orange-screen",
    color: "#FFA500",
    isAxis: true,
    title: "Orange screen",
    type: "color",
  },
  {
    name: "Pink Screen",
    path: "/pink-screen",
    color: "#FFC0CB",
    isAxis: true,
    title: "Pink screen",
    type: "color",
  },
  {
    name: "Purple Screen",
    path: "/purple-screen",
    color: "#800080",
    isAxis: true,
    title: "Purple screen",
    type: "color",
  },
  {
    name: "Zoom Lighting",
    path: "/zoom-lighting",
    color: "#FFC5C2",
    isAxis: true,
    title: "Lighting for zoom calls",
    type: "color",
  },
  // Prank Screens
  {
    name: "White noise",
    path: "/white-noise",
    icon: "https://emojicdn.elk.sh/🔊",
    title: "White noise for sleep",
    type: "prank",
    components: {
      mid: <WhiteNoiseScreen />,
      right: <WhiteNoisePlayButton />,
      bottom: <NavigateBar />,
    },
  },
  {
    name: "Fake Broken screen",
    path: "/broken-screen",
    icon: "https://emojicdn.elk.sh/💔",
    title: "Fake Broken screen - Prank",
    type: "prank",
    components: {
      mid: <BrokenScreen />,
      bottom: <NavigateBar />,
    },
  },
  {
    name: "Fake Blue Screen of Death",
    path: "/blue-screen-of-death-windows",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen />,
      bottom: <NavigateBar />,
    },
  },
  {
    name: "Fake Blue Screen of Death 10",
    path: "/blue-screen-of-death-windows-10",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows 10 Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen10 />,
      right: <FakeBlueScreen10_Sidebar />,
      bottom: <NavigateBar />,
    },
  },
  {
    name: "Hacker Typer Screen",
    path: "/hacker-screen",
    icon: "https://emojicdn.elk.sh/👨‍💻",
    title: "Hacker Typer Screen - Prank",
    type: "prank",
    components: {
      // mid: <HackerTyperScreen />,
      bottom: <NavigateBar />,
    },
  },

  // Fake Update Screens
  {
    name: "Fake Update Windows 10",
    path: "/fake-update-windows-10",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows 10 Fake Update",
    type: "fake-update",
  },
  {
    name: "Fake Update Windows XP",
    path: "/fake-update-windows-xp",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows XP Fake Update",
    type: "fake-update",
  },
  {
    name: "Fake Update Mac OS X",
    path: "/fake-update-mac-os-x",
    icon: "https://emojicdn.elk.sh/🍎",
    title: "Mac OS X Fake Update",
    type: "fake-update",
  },
  {
    name: "Fake Update Ubuntu 22.04",
    path: "/fake-update-ubuntu-22-04",
    icon: "https://emojicdn.elk.sh/🐧",
    title: "Ubuntu 22.04 Fake Update",
    type: "fake-update",
  },
  {
    name: "Fake Update Chrome OS",
    path: "/fake-update-chrome-os",
    icon: "https://emojicdn.elk.sh/🌐",
    title: "ChromeOS Fake Update",
    type: "fake-update",
  },

  // Screensaver Screens
  {
    name: "DVD Screensaver",
    path: "/dvd-screensaver",
    icon: "https://emojicdn.elk.sh/📀",
    title: "DVD Screensaver",
    type: "screensaver",
  },
  {
    name: "Flip Clock",
    path: "/flip-clock",
    icon: "https://emojicdn.elk.sh/⏰",
    title: "Flip Clock Screensaver",
    type: "screensaver",
  },
  {
    name: "Motivational Quote",
    path: "/motivational-quote",
    icon: "https://emojicdn.elk.sh/💬",
    title: "Motivational Quote Screensaver",
    type: "screensaver",
  },
  {
    name: "No Signal",
    path: "/no-signal",
    icon: "https://emojicdn.elk.sh/📡",
    title: "Color Bars - No Signal TV Screen",
    type: "screensaver",
  },
];

export const getRouteByPath = (path: string): RouteStore | undefined => {
  const newPath = path.startsWith("/") ? path : `/${path}`; // example: /example-path
  const route = routes.find((route) => route.path === newPath);
  return route;
};

export const getRouteByPathAsync = async (
  path: string,
): Promise<RouteStore | null> => {
  try {
    const route = routes.find((route) => route.path === path);
    if (!route) return null;

    // If there's any async data loading or processing needed for the route,
    // it should be done here
    await Promise.resolve(); // Placeholder for any future async operations
    console.log("get route successful");

    return route;
  } catch (error) {
    console.error("Error fetching route:", error);
    return null;
  }
};

export const getColorRoutes = () => routes.filter((route) => route.color);
export const getIconRoutes = () => routes.filter((route) => route.icon);

export default routes;
