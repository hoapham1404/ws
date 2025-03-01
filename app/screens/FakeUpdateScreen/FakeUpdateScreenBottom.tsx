'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import ChromeOSUpdateScreen from '@/public/chrome-os-update-screen.webp'
import WindowsXPUpdateScreen from '@/public/windows-xp-update-screen.webp'
import Windows10UpdateScreen from '@/public/windows-10-update-screen.webp'
import Ubuntu2204UpdateScreen from '@/public/ubuntu-22-04-update-screen.webp'
import MacOSXUpdateScreen from '@/public/mac-os-x-update-screen.webp'

const defaultRoutes = [
  { name: "Windows 10", path: "/fake-update-windows-10", icon: Windows10UpdateScreen },
  { name: "Windows XP", path: "/fake-update-windows-xp", icon: WindowsXPUpdateScreen },
  { name: "Mac OS X", path: "/fake-update-mac-os-x", icon: MacOSXUpdateScreen },
  { name: "Ubuntu 22.04", path: "/fake-update-ubuntu-22-04", icon: Ubuntu2204UpdateScreen },
  { name: "Chrome OS", path: "/fake-update-chrome-os", icon: ChromeOSUpdateScreen },
]

export const FakeUpdateScreenBottom = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-wrap justify-center mb-4 cursor-pointer">
      {defaultRoutes.map((route) => (
        <div key={route.name} className={`flex flex-col items-center p-6 ${route.path === currentPath ? 'bg-gray-300' : ''}`}>
          <button
            onClick={() => navigateTo(route.path)}
            className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
          >
            <Image src={route.icon} alt={route.name} className="mx-auto object-cover" />
          </button>
          <span className="mt-6 text-sm md:text-base underline">{route.name}</span>
        </div>
      ))}
    </div>
  );
};
