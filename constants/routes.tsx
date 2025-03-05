// constants/routes.ts

import FakeBlueScreen10 from "@/components/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10";
import FakeBlueScreen10_Sidebar from "@/components/(prank-screen)/blue-screen-of-death-windows-10/FakeBlueScreen10_Sidebar";
import FakeBlueScreen from "@/components/(prank-screen)/blue-screen-of-death-windows/FakeBlueScreen";
import BrokenScreen from "@/components/(prank-screen)/broken-screen/BrokenScreen";
import HackerSpeedInput from "@/components/(prank-screen)/hacker-screen/HackerSpeedInput";
import HackerTyper from "@/components/(prank-screen)/hacker-screen/HackerTyper";
import { WhiteNoisePlayButton } from "@/components/(prank-screen)/white-noise/WhiteNoisePlayButton";
import WhiteNoiseScreen from "@/components/(prank-screen)/white-noise/WhiteNoiseScreen";
import DVDSaver from "@/components/DVDSaver/DVDSaver";
import FakeChromeOS from "@/components/FakeChromeOS/FakeChromeOS";
import FakeOSUpdate from "@/components/FakeOSUpdate/FakeOSUpdate";
import FakeUbuntu from "@/components/FakeUbuntu/FakeUbuntu";
import FakeUpdateWin10 from "@/components/FakeUpdateWin10/FakeUpdateWin10";
import FakeUpdateWinXP from "@/components/FakeUpdateWinXP/FakeUpdateWinXP";
import FlipClockPreview from "@/components/FlipClock/FlipClockPreview";
import MotivationQuotesPreview from "@/components/MotivationQuotes/MotivationQuotesPreview";
import MotivationQuotesRight from "@/components/MotivationQuotes/MotivationQuotesRight";
import NoSignalPreview from "@/components/NoSignalPage/NoSignalPreview";
import ChromeOSUpdateScreen from "@/public/chrome-os-update-screen.webp";
import WindowsXPUpdateScreen from "@/public/windows-xp-update-screen.webp";
import Windows10UpdateScreen from "@/public/windows-10-update-screen.webp";
import Ubuntu2204UpdateScreen from "@/public/ubuntu-22-04-update-screen.webp";
import MacOSXUpdateScreen from "@/public/mac-os-x-update-screen.webp";
import WhiteNoiseIcon from "@/public/white-noise.webp";
import BrokenScreenIcon from "@/public/broken.webp";
import DeathXPIcon from "@/public/death.webp";
import Death10Icon from "@/public/death-10.webp";
import HackerTyperIcon from "@/public/hacker-typer.webp";
import DVDIcon from "@/public/dvd.webp";
import FlipClockIcon from "@/public/flip-clock.webp";
import MotivationalQuoteIcon from "@/public/motivational-quote.webp";
import NoSignalIcon from "@/public/saver-color-bars.png";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import FakeUpdateWin11 from "@/components/FakeUpdateWin11/FakeUpdateWin11";
import FakeAndroidUpdateIcon from "@/public/android-logo.png";
import FakeWin11UpdateIcon from "@/public/fake-update-win11.png";
import FakeAndroidUpdate from "@/components/FakeAndroidUpdate/FakeAndroidUpdate";

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
  thumbnail?: StaticImageData;

  constructor(
    name: string,
    path: string,
    title: string,
    type: "color" | "prank" | "fake-update" | "screensaver",
    color?: string,
    icon?: string,
    isAxis?: boolean,
    thumbnail?: StaticImageData,
  ) {
    this.name = name;
    this.path = path;
    this.color = color;
    this.icon = icon;
    this.isAxis = isAxis;
    this.title = title;
    this.type = type;
    this.thumbnail = thumbnail;
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
    },
    thumbnail: WhiteNoiseIcon,
  },
  {
    name: "Fake Broken screen",
    path: "/broken-screen",
    icon: "https://emojicdn.elk.sh/💔",
    title: "Fake Broken screen - Prank",
    type: "prank",
    components: {
      mid: <BrokenScreen />,
    },
    thumbnail: BrokenScreenIcon,
  },
  {
    name: "Fake Blue Screen of Death",
    path: "/blue-screen-of-death-windows",
    icon: "https://emojicdn.elk.sh/💻",
    title: "Windows Fake Blue Screen of Death",
    type: "prank",
    components: {
      mid: <FakeBlueScreen />,
    },
    thumbnail: DeathXPIcon,
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
    },
    thumbnail: Death10Icon,
  },
  {
    name: "Hacker Typer Screen",
    path: "/hacker-screen",
    icon: "https://emojicdn.elk.sh/��‍💻",
    title: "Hacker Typer Screen - Prank",
    type: "prank",
    components: {
      mid: <HackerTyper />,
      right: <HackerSpeedInput />,
    },
    thumbnail: HackerTyperIcon,
  },

  // Fake Update Screens
  {
    name: "Fake Update Windows 10",
    path: "/fake-windows-10-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows 10 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin10 />,
    },
    thumbnail: Windows10UpdateScreen,
  },
  {
    name: "Fake Update Windows XP",
    path: "/fake-windows-xp-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows XP Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWinXP />,
    },
    thumbnail: WindowsXPUpdateScreen,
  },
  {
    name: "Fake Update Mac OS X",
    path: "/fake-mac-os-x-update-screen",
    icon: "https://emojicdn.elk.sh/🍎",
    title: "Mac OS X Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeOSUpdate />,
    },
    thumbnail: MacOSXUpdateScreen,
  },
  {
    name: "Fake Update Ubuntu 22.04",
    path: "/fake-ubuntu-22-04-update-screen",
    icon: "https://emojicdn.elk.sh/🐧",
    title: "Ubuntu 22.04 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUbuntu />,
    },
    thumbnail: Ubuntu2204UpdateScreen,
  },
  {
    name: "Fake Update Chrome OS",
    path: "/fake-chrome-os-update-screen",
    icon: "https://emojicdn.elk.sh/🌐",
    title: "ChromeOS Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeChromeOS />,
    },
    thumbnail: ChromeOSUpdateScreen,
  },
  {
    name: "Fake Update Windows 11",
    path: "/fake-windows-11-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    title: "Windows 11 Fake Update",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin11 />,
    },
    thumbnail: FakeWin11UpdateIcon,
  },
  {
    name: "Android Fake Update",
    path: "/fake-android-update",
    icon: "https://emojicdn.elk.sh/📱",
    title: "Fake Android Update",
    type: "fake-update",
    components: {
      mid: <FakeAndroidUpdate />,
    },
    thumbnail: FakeAndroidUpdateIcon,
  },

  // Screensaver Screens
  {
    name: "DVD Screensaver",
    path: "/dvd-screensaver",
    icon: "https://emojicdn.elk.sh/📀",
    title: "DVD Screensaver",
    type: "screensaver",
    components: {
      mid: <DVDSaver />,
    },
    thumbnail: DVDIcon,
  },
  {
    name: "Flip Clock",
    path: "/flip-clock-screensaver",
    icon: "https://emojicdn.elk.sh/⏰",
    title: "Flip Clock Screensaver",
    type: "screensaver",
    components: {
      mid: <FlipClockPreview />,
    },
    thumbnail: FlipClockIcon,
  },
  {
    name: "Motivational Quote",
    path: "/motivational-quote-screensaver",
    icon: "https://emojicdn.elk.sh/💬",
    title: "Motivational Quote Screensaver",
    type: "screensaver",
    components: {
      mid: <MotivationQuotesPreview />,
    },
    thumbnail: MotivationalQuoteIcon,
  },
  {
    name: "No Signal",
    path: "/no-signal-smpte-color-bars-screensaver",
    icon: "https://emojicdn.elk.sh/📡",
    title: "Color Bars - No Signal TV Screen",
    type: "screensaver",
    components: {
      mid: <NoSignalPreview />,
    },
    thumbnail: NoSignalIcon,
  },
];
export const getRouteByPath = (
  path?: string | null,
): RouteStore | undefined => {
  if (!path) throw new Error("Route path is required when fetching route");
  return routes.find(
    (route) => route.path === (path.startsWith("/") ? path : `/${path}`),
  );
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
export const getNavigationRoutes = (
  pathName: string,
): RouteStore[] | undefined => {
  const existRoute = getRouteByPath(pathName);
  if (!existRoute) return undefined;

  const routeType = existRoute.type;
  const navigationRoutes = routes.filter((route) => route.type !== routeType);
  return navigationRoutes;
};
export const getColorNavigationRoutes = (): RouteStore[] => {
  return routes.filter((option: RouteStore) => !option.isAxis && option.color)
}
export default routes;
