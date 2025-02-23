'use client'

import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import DVDIcon from '@/public/dvd.webp';
import FlipClockIcon from '@/public/flip-clock.webp';
import MotivationalQuoteIcon from '@/public/motivational-quote.webp';
import NoSignalIcon from '@/public/saver-color-bars.png';

const defaultRoutes = [
    { name: "DVD", path: "/dvd-screensaver", icon: DVDIcon },
    { name: "Flip Clock", path: "/flip-clock", icon: FlipClockIcon },
    { name: "Motivational Quote", path: "/motivational-quote", icon: MotivationalQuoteIcon },
    { name: "No Signal", path: "/no-signal", icon: NoSignalIcon },
]

export const DVDBottom = () => {
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
