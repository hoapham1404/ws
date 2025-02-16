const routes = [
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

  { name: "White Noise", path: "/white-noise", icon: "https://emojicdn.elk.sh/🤡" },
  { name: "Broken Screen", path: "/broken-screen", icon: "https://emojicdn.elk.sh/🤡" },
];


export const getRouteByPath = (path: string) => routes.find((s) => s.path === path);
export const getColorRoutes = () => routes.filter((s) => s.color);
export const getIconRoutes = () => routes.filter((s) => s.icon);
