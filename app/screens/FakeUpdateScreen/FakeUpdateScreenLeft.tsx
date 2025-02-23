'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import FakeAndroidUpdate from '@/public/android-logo.png'
import FakeWin11Update from '@/public/fake-update-win11.png'



const defaultRoutes = [
    { name: "Android", path: "/fake-android-update", icon: FakeAndroidUpdate },
    { name: "Windows 11", path: "/fake-update-windows-11", icon: FakeWin11Update },
]

export const FakeUpdateScreenLeft = () => {
    const router = useRouter();
    const currentPath = usePathname();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <div className="flex flex-col justify-start h-full cursor-pointer space-y-4">
            {defaultRoutes.map((route) => (
                <div key={route.name} className={`flex flex-row items-center p-4 gap-4 ${route.path === currentPath ? 'bg-transparent' : ''}`}>
                    <Image src={route.icon} alt={route.name} className="w-16 h-8 rounded-md shadow-md object-cover" />
                    <span 
                        onClick={() => navigateTo(route.path)}
                        className="text-sm md:text-base underline hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        {route.name}
                    </span>
                </div>
            ))}
        </div>
    );
};
