import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import FakeAndroidUpdate from '@/public/android-logo.png'
import FakeWin11Update from '@/public/fake-update-win11.png'
import Link from 'next/link';



const defaultRoutes = [
  { name: "Android", path: "/fake-android-update", icon: FakeAndroidUpdate },
  { name: "Windows 11", path: "/fake-windows-11-update-screen", icon: FakeWin11Update },
]

export const FakeUpdateScreenLeft = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return (
    <div className="h-full flex flex-col justify-between cursor-pointer ">
      {defaultRoutes.map((route) => (
        <Link key={route.name} href={route.path} className={`flex flex-row items-center p-2 rounded-md gap-4 ${route.path === currentPath ? 'bg-gray-300' : ''}`}>
          <Image src={route.icon} alt={route.name} className="w-16 h-8 rounded-md shadow-md object-cover shadow-2xl shadow-[#00000040]" />
          <span
            onClick={() => navigateTo(route.path)}
            className="text-sm md:text-base underline hover:opacity-90 transition-opacity cursor-pointer"
          >
            {route.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
