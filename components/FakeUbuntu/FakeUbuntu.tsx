import UbuntuLogo from "@/public/ubuntu-logo.png";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen";

export default function FakeUbuntu() {
  const [activeDot, setActiveDot] = useState(0);
  const { isFullscreen } = useFullScreen();
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 5);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#2c001e] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <Image src={UbuntuLogo} alt="Ubuntu Logo" width={isFullscreen ? 350 : 120} height={isFullscreen ? 350 : 120} />
        <div className={`flex ${isFullscreen ? 'gap-8' : 'gap-4'} mt-4`}>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`${isFullscreen ? 'w-2' : 'w-1'} aspect-square rounded-full ${index === activeDot ? 'bg-red-500' : ''
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
