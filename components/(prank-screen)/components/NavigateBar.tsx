"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import WhiteNoiseIcon from "@/public/white-noise.webp";
import BrokenScreenIcon from "@/public/broken.webp";
import DeathXPIcon from "@/public/death.webp";
import Death10Icon from "@/public/death-10.webp";
import HackerTyperIcon from "@/public/hacker-typer.webp";
import Link from "next/link";
import { useTranslations } from "next-intl";

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
  const currentPath = usePathname();
  const t = useTranslations();

  return (
    <div className="flex justify-center mb-4 cursor-pointer overflow-x-auto whitespace-nowrap">
      {defaultRoutes.map((route) => (
        <Link
          key={route.name}
          href={route.path}
          className={`flex flex-col items-center p-6 ${route.path === currentPath ? "bg-gray-300" : ""}`}
        >
          <button
            className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
          >
            <Image
              src={route.image}
              alt={route.name}
              className="mx-auto object-cover"
            />
          </button>
          <span className="mt-6 text-sm md:text-base underline">
            {t(`${route.path}.name`)}
          </span>
        </Link>
      ))}
    </div>
  );
}
