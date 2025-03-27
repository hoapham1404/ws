
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
import DVDSetting from "@/components/DVDSaver/DVDSetting";
import TermAndCondition from "@/components/TermAndCondition/TermAndCondition";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import ContactUs from "@/components/ContactUs/ContactUs";
import KernelPanicIcon from "@/public/OldKernelPanic1280.webp";
import KernelPanic from "@/components/KernelPanic/KernelPanic";
import Video from "@/components/Video/Video";
import BeeThumbnail from "@/public/bee.thumbnail.png";
import FrogThumbnail from "@/public/frog.thumbnail.png";
import FlyThumbnail from "@/public/fly.thumnail.png";
import Signal1Thumbnail from "@/public/signal1.thumbnail.png";
import Signal2Thumbnail from "@/public/signal2.thumbnail.png";
import CockroachThumbnail from "@/public/cockroach.thumbnail.png"

export class RouteStore {
  path: string;
  color?: string;
  colorName?: string;
  icon?: string;
  isAxis?: boolean;
  type?: "color" | "prank" | "fake-update" | "screensaver";
  isPage?: boolean;
  components?: {
    left?: ReactNode;
    mid?: ReactNode;
    right?: ReactNode;
    bottom?: ReactNode;
  };
  thumbnail?: StaticImageData;
  iconColor?: "white" | "black";

  constructor(
    path: string,
    type?: "color" | "prank" | "fake-update" | "screensaver",
    isPage?: boolean,
    color?: string,
    colorName?: string,
    icon?: string,
    isAxis?: boolean,
    thumbnail?: StaticImageData,
    iconColor?: "white" | "black",
  ) {
    this.path = path;
    this.color = color;
    this.colorName = colorName;
    this.icon = icon;
    this.isAxis = isAxis;
    this.type = type;
    this.isPage = isPage;
    this.thumbnail = thumbnail;
    this.iconColor = iconColor;
  }
}

export const routes: RouteStore[] = [
  // Color Screens
  {
    path: "/",
    color: "#FFFFFF",
    colorName: "white",
    isAxis: false,
    type: "color",
    iconColor: "black",
  },
  {
    path: "/black-screen",
    color: "#000000",
    colorName: "black",
    isAxis: false,
    type: "color",
    iconColor: "white",
  },
  {
    path: "/red-screen",
    color: "#FF0000",
    colorName: "red",
    isAxis: false,
    type: "color",
    iconColor: "white",
  },
  {
    path: "/green-screen",
    color: "#00FF00",
    colorName: "green",
    isAxis: false,
    type: "color",
    iconColor: "black",
  },
  {
    path: "/blue-screen",
    color: "#0000FF",
    colorName: "blue",
    isAxis: false,
    type: "color",
    iconColor: "white",
  },
  {
    path: "/yellow-screen",
    color: "#FFFF00",
    colorName: "yellow",
    isAxis: true,
    type: "color",
  },
  {
    path: "/orange-screen",
    color: "#FFA500",
    colorName: "orange",
    isAxis: true,
    type: "color",
  },
  {
    path: "/pink-screen",
    color: "#FFC0CB",
    colorName: "pink",
    isAxis: true,
    type: "color",
  },
  {
    path: "/purple-screen",
    color: "#800080",
    colorName: "purple",
    isAxis: true,
    type: "color",
  },
  {
    path: "/zoom-lighting",
    color: "#ffe5ce",
    colorName: "zoom-lighting",
    isAxis: true,
    type: "color",
  },
  // Prank Screens
  {
    path: "/white-noise",
    icon: "https://emojicdn.elk.sh/🔊",
    type: "prank",
    components: {
      mid: <WhiteNoiseScreen />,
      right: <WhiteNoisePlayButton />,
    },
    thumbnail: WhiteNoiseIcon,
    iconColor: "white",
  },
  {
    path: "/broken-screen",
    icon: "https://emojicdn.elk.sh/💔",
    type: "prank",
    components: {
      mid: <BrokenScreen />,
    },
    thumbnail: BrokenScreenIcon,
    iconColor: "white",
  },
  {
    path: "/blue-screen-of-death-windows",
    icon: "https://emojicdn.elk.sh/💻",
    type: "prank",
    components: {
      mid: <FakeBlueScreen />,
    },
    thumbnail: DeathXPIcon,
    iconColor: "white",
  },
  {
    path: "/blue-screen-of-death-windows-10",
    icon: "https://emojicdn.elk.sh/💻",
    type: "prank",
    components: {
      mid: <FakeBlueScreen />,
      right: <FakeBlueScreen10_Sidebar />,
    },
    thumbnail: Death10Icon,
    iconColor: "white",
  },
  {
    path: "/hacker-screen",
    icon: "https://emojicdn.elk.sh/💻",
    type: "prank",
    components: {
      mid: <HackerTyper />,
      right: <HackerSpeedInput />,
    },
    thumbnail: HackerTyperIcon,
    iconColor: "white",
  },

  // Fake Update Screens
  {
    path: "/fake-windows-10-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin10 />,
    },
    thumbnail: Windows10UpdateScreen,
    iconColor: "white",
  },
  {
    path: "/fake-windows-xp-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWinXP />,
    },
    thumbnail: WindowsXPUpdateScreen,
    iconColor: "white",
  },
  {
    path: "/fake-mac-os-x-update-screen",
    icon: "https://emojicdn.elk.sh/🍎",
    type: "fake-update",
    components: {
      mid: <FakeOSUpdate />,
    },
    thumbnail: MacOSXUpdateScreen,
    iconColor: "white",
  },
  {
    path: "/fake-ubuntu-22-04-update-screen",
    icon: "https://emojicdn.elk.sh/🐧",
    type: "fake-update",
    components: {
      mid: <FakeUbuntu />,
    },
    thumbnail: Ubuntu2204UpdateScreen,
    iconColor: "white",
  },
  {
    path: "/fake-chrome-os-update-screen",
    icon: "https://emojicdn.elk.sh/🌐",
    type: "fake-update",
    components: {
      mid: <FakeChromeOS />,
    },
    thumbnail: ChromeOSUpdateScreen,
    iconColor: "white",
  },
  {
    path: "/fake-windows-11-update-screen",
    icon: "https://emojicdn.elk.sh/🪟",
    type: "fake-update",
    components: {
      mid: <FakeUpdateWin11 />,
    },
    thumbnail: FakeWin11UpdateIcon,
    iconColor: "white",
  },
  {
    path: "/fake-android-update",
    icon: "https://emojicdn.elk.sh/📱",
    type: "fake-update",
    components: {
      mid: <FakeAndroidUpdate />,
    },
    thumbnail: FakeAndroidUpdateIcon,
    iconColor: "white",
  },

  // Screensaver Screens
  {
    path: "/dvd-screensaver",
    icon: "https://emojicdn.elk.sh/📀",
    type: "screensaver",
    components: {
      mid: <DVDSaver />,
      right: <DVDSetting />,
    },
    thumbnail: DVDIcon,
    iconColor: "white",
  },
  {
    path: "/flip-clock-screensaver",
    icon: "https://emojicdn.elk.sh/⏰",
    type: "screensaver",
    components: {
      mid: <FlipClockPreview />,
    },
    thumbnail: FlipClockIcon,
    iconColor: "black",
  },
  {
    path: "/motivational-quote-screensaver",
    icon: "https://emojicdn.elk.sh/💬",
    type: "screensaver",
    components: {
      mid: <MotivationQuotesPreview />,
      right: <MotivationQuotesRight />,
    },
    thumbnail: MotivationalQuoteIcon,
    iconColor: "black",
  },
  {
    path: "/no-signal-smpte-color-bars-screensaver",
    icon: "https://emojicdn.elk.sh/📡",
    type: "screensaver",
    components: {
      mid: <NoSignalPreview />,
    },
    thumbnail: NoSignalIcon,
    iconColor: "white",
  },
  {
    path: "/terms-and-conditions",
    isPage: true,
    components: {
      mid: <TermAndCondition />,
    },
  },
  {
    path: "/privacy-policy",
    isPage: true,
    components: {
      mid: <PrivacyPolicy />,
    },
  },
  {
    path: "/contact-us",
    isPage: true,
    components: {
      mid: <ContactUs />,
    },
  },
  {
    path: "/kernel-panic",
    type: "prank",
    icon: "https://emojicdn.elk.sh/🔋",
    components: {
      mid: <KernelPanic />,
    },
    thumbnail: KernelPanicIcon,
    iconColor: "white",
  },
  {
    path: "/bee",
    type: "prank",
    icon: "🐝",
    components: {
      mid: <Video srcRef="bee" />,
    },
    thumbnail: BeeThumbnail,
  },
  {
    path: "/frog",
    type: "prank",
    icon: "🐸",
    components: {
      mid: <Video srcRef="frog" />,
    },
    thumbnail: FrogThumbnail,
  },
  {
    path: "/fly",
    type: "prank",
    icon: "🪲",
    components: {
      mid: <Video srcRef="flies" />,
    },
    thumbnail: FlyThumbnail,
  },
  {
    path: "/signal1",
    type: "prank",
    icon: "📡",
    components: {
      mid: <Video srcRef="signal_1" />,
    },
    thumbnail: Signal1Thumbnail,
  },
  {
    path: "/signal2",
    type: "prank",
    icon: "📡",
    components: {
      mid: <Video srcRef="signal_2" />,
    },
    thumbnail: Signal2Thumbnail,
  },
  {
    path: "/cockroach",
    type: "prank",
    icon: "🪳",
    components: {
      mid: <Video srcRef="cockroach" />,
    },
    thumbnail: CockroachThumbnail,
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

    await Promise.resolve();
    console.log("get route successful");

    return route;
  } catch (error) {
    console.error("Error fetching route:", error);
    return null;
  }
};

export const getColorRoutes = () => routes.filter((route) => route.color);
export const getIconRoutes = () => routes.filter((route) => route.icon);
export const getPrankRoutes = () =>
  routes.filter((route) => route.type === "prank");
export const getFakeUpdateRoutes = (): RouteStore[] => {
  return routes
    .filter((route) => route.type === "fake-update")
    .filter(
      (route) =>
        route.path !== "/fake-windows-11-update-screen" &&
        route.path !== "/fake-android-update",
    );
};
export const getScreenSaverRoutes = (): RouteStore[] => {
  return routes.filter((route) => route.type === "screensaver");
};
export const getNavigationRoutes = (
  pathName: string,
): RouteStore[] | undefined => {
  const existRoute = getRouteByPath(pathName);
  if (!existRoute) return undefined;
  return routes;
};
export const getColorNavigationRoutes = (): RouteStore[] => {
  return routes.filter((option: RouteStore) => !option.isAxis && option.color);
};

export const getRoutesType = (): string[] => {
  const types = routes.map((route) => route.type || "");
  return [...new Set(types)];
};

export interface ScreenNavBar {
  name: string;
  href: string;
  type: string;
}

export const getScreensNavBar = (): ScreenNavBar[] => {
  const grouped = new Map<string, ScreenNavBar>();
  for (const route of routes) {
    if (route.type && !grouped.has(route.type)) {
      grouped.set(route.type, {
        name:
          route.type &&
          route.type
            .replace("-", " ")
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
            .join(" "),
        href: route.path,
        type: route.type,
      });
    }
  }
  return Array.from(grouped.values());
};

export const getRouteTypeByPath = (path: string): string | undefined => {
  return routes.find((route) => route.path === path)?.type;
};

export default routes;
