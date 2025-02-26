"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import WhiteNoiseIcon from "@/public/white-noise.webp";
import BrokenScreenIcon from "@/public/broken.webp";
import DeathXPIcon from "@/public/death.webp";
import Death10Icon from "@/public/death-10.webp";
import HackerTyperIcon from "@/public/hacker-typer.webp";

const defaultRoutes = [
  { name: "White Noise", path: "/white-noise", image: WhiteNoiseIcon },
  { name: "Broken Screen", path: "/broken-screen", image: BrokenScreenIcon },
  {
    name: "Screen of Death XP",
    path: "/blue-screen-of-death-windows",
    image: DeathXPIcon,
  },
  {
    name: "Screen of Death 10",
    path: "/blue-screen-of-death-windows-10",
    image: Death10Icon,
  },
  { name: "Hacker Typer", path: "/hacker-screen", image: HackerTyperIcon },
];

export default function NavigateBar() {
  const router = useRouter();
  const currentPath = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex justify-center mb-4 cursor-pointer overflow-x-auto whitespace-nowrap">
      {defaultRoutes.map((route) => (
        <div
          key={route.name}
          className={`flex flex-col items-center p-6 ${route.path === currentPath ? "bg-gray-300" : ""}`}
        >
          <button
            onClick={() => navigateTo(route.path)}
            className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
          >
            <Image
              src={route.image}
              alt={route.name}
              className="mx-auto object-cover"
            />
          </button>
          <span className="mt-6 text-sm md:text-base underline">
            {route.name}
          </span>
        </div>
      ))}
    </div>
  );
}
