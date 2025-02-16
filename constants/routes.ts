// constants/routes.ts

interface Route {
  name: string;
  path: string;
  color?: string;
  icon?: string;
}

const routes: Route[] = [
  // Color Screens
  { name: "White Screen", path: "/", color: "#FFFFFF" },
  { name: "Black Screen", path: "/black-screen", color: "#000000" },
  { name: "Red Screen", path: "/red-screen", color: "#FF0000" },
  { name: "Green Screen", path: "/green-screen", color: "#00FF00" },
  { name: "Blue Screen", path: "/blue-screen", color: "#0000FF" },
  { name: "Yellow Screen", path: "/yellow-screen", color: "#FFFF00" },
  { name: "Orange Screen", path: "/orange-screen", color: "#FFA500" },
  { name: "Pink Screen", path: "/pink-screen", color: "#FFC0CB" },
  { name: "Purple Screen", path: "/purple-screen", color: "#800080" },
  { name: "Zoom Lighting", path: "/zoom-lighting", color: "#FFC5C2" },

  // Prank Screens
  { name: "White Noise", path: "/white-noise", icon: "https://emojicdn.elk.sh/🔊" },
  { name: "Broken Screen", path: "/broken-screen", icon: "https://emojicdn.elk.sh/💔" },
  { name: "Screen of Death XP", path: "/screen-of-death-xp", icon: "https://emojicdn.elk.sh/💻" },
  { name: "Screen of Death 10", path: "/screen-of-death-10", icon: "https://emojicdn.elk.sh/💻" },
  { name: "Hacker Typer", path: "/hacker-typer", icon: "https://emojicdn.elk.sh/👨‍💻" },

  // Fake Update Screens
  { name: "Fake Update Windows 10", path: "/fake-update-windows-10", icon: "https://emojicdn.elk.sh/🪟" },
  { name: "Fake Update Windows XP", path: "/fake-update-windows-xp", icon: "https://emojicdn.elk.sh/🪟" },
  { name: "Fake Update Mac OS X", path: "/fake-update-mac-os-x", icon: "https://emojicdn.elk.sh/🍎" },
  { name: "Fake Update Ubuntu 22.04", path: "/fake-update-ubuntu-22-04", icon: "https://emojicdn.elk.sh/🐧" },
  { name: "Fake Update Chrome OS", path: "/fake-update-chrome-os", icon: "https://emojicdn.elk.sh/🌐" },

  // Screensaver Screens
  { name: "DVD Screensaver", path: "/dvd-screensaver", icon: "https://emojicdn.elk.sh/📀" },
  { name: "Flip Clock", path: "/flip-clock", icon: "https://emojicdn.elk.sh/⏰" },
  { name: "Motivational Quote", path: "/motivational-quote", icon: "https://emojicdn.elk.sh/💬" },
  { name: "No Signal", path: "/no-signal", icon: "https://emojicdn.elk.sh/📡" },
];

export const getRouteByPath = (path: string) => routes.find((route) => route.path === path);
export const getColorRoutes = () => routes.filter((route) => route.color);
export const getIconRoutes = () => routes.filter((route) => route.icon);

export default routes;

