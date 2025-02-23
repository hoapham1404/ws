// constants/routes.ts

export class RouteStore {
  name: string;
  path: string;
  color?: string;
  icon?: string;
  isAxis?: boolean;

  constructor(name: string, path: string, color?: string, icon?: string, isAxis?: boolean) {
    this.name = name;
    this.path = path;
    this.color = color;
    this.icon = icon;
    this.isAxis = isAxis;
  }
}

export const routes: RouteStore[] = [
  // Color Screens
  { name: "White Screen", path: "/", color: "#FFFFFF", isAxis: false },
  { name: "Black Screen", path: "/black-screen", color: "#000000", isAxis: false },
  { name: "Red Screen", path: "/red-screen", color: "#FF0000", isAxis: false },
  { name: "Green Screen", path: "/green-screen", color: "#00FF00", isAxis: false },
  { name: "Blue Screen", path: "/blue-screen", color: "#0000FF", isAxis: false },
  { name: "Yellow Screen", path: "/yellow-screen", color: "#FFFF00", isAxis: true },
  { name: "Orange Screen", path: "/orange-screen", color: "#FFA500", isAxis: true },
  { name: "Pink Screen", path: "/pink-screen", color: "#FFC0CB", isAxis: true },
  { name: "Purple Screen", path: "/purple-screen", color: "#800080", isAxis: true },
  { name: "Zoom Lighting", path: "/zoom-lighting", color: "#FFC5C2", isAxis: true },

  // Prank Screens
  { name: "White noise", path: "/white-noise", icon: "https://emojicdn.elk.sh/🔊" },
  { name: "Fake Broken screen", path: "/broken-screen", icon: "https://emojicdn.elk.sh/💔" },
  { name: "Fake Blue Screen of Death", path: "/blue-screen-of-death-windows", icon: "https://emojicdn.elk.sh/💻" },
  { name: "Fake Blue Screen of Death 10", path: "/blue-screen-of-death-windows-10", icon: "https://emojicdn.elk.sh/💻" },
  { name: "Hacker Typer Screen", path: "/hacker-screen", icon: "https://emojicdn.elk.sh/👨‍💻" },

  // Fake Update Screens
  { name: "Fake Update Windows 10", path: "/fake-update-windows-10", icon: "https://emojicdn.elk.sh/🪟" },
  { name: "Fake Update Windows XP", path: "/fake-update-windows-xp", icon: "https://emojicdn.elk.sh/🪟" },
  { name: "Fake Update Mac OS X", path: "/fake-update-mac-os-x", icon: "https://emojicdn.elk.sh/🍎" },
  { name: "Fake Update Ubuntu 22.04", path: "/fake-update-ubuntu-22-04", icon: "https://emojicdn.elk.sh/🐧" },
  { name: "Fake Update Chrome OS", path: "/fake-update-chrome-os", icon: "https://emojicdn.elk.sh/🌐" },

  // Screensaver Screens
  { name: "DVD Screensaver", path: "/dvd-screensaver", icon: "https://emojicdn.elk.sh/📀", },
  { name: "Flip Clock", path: "/flip-clock", icon: "https://emojicdn.elk.sh/⏰" },
  { name: "Motivational Quote", path: "/motivational-quote", icon: "https://emojicdn.elk.sh/💬" },
  { name: "No Signal", path: "/no-signal", icon: "https://emojicdn.elk.sh/📡" },
];

export const getRouteByPath = (path: string) => routes.find((route) => route.path === path);
export const getColorRoutes = () => routes.filter((route) => route.color);
export const getIconRoutes = () => routes.filter((route) => route.icon);

export default routes;

