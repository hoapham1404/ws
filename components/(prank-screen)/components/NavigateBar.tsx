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
    <div className="flex justify-between mt-4 cursor-pointer">
      {defaultRoutes.map((route) => (
        <Link
          key={route.name}
          href={route.path}
          className={`w-full flex flex-col items-center p-6 ${route.path === currentPath ? 'bg-gray-300' : ''}`}
        >
          <Image
            src={route.image}
            alt={route.name}
            className="w-28 aspect-video object-cover rounded-lg"
          />
          <span className="mt-2 underline text-wrap text-balance  text-center">
            {t(`${route.path}.name`)}
          </span>
        </Link>
      ))}
    </div>
  );
}
