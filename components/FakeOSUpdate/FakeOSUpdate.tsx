import AppleLogo from "@/public/apple.jpg";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen";

export default function FakeOSUpdate() {
  const [progress, setProgress] = useState(0);
  const { isFullscreen } = useFullScreen();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black w-full h-full flex flex-col justify-center items-center">
      <Image src={AppleLogo} alt="Apple Logo" width={isFullscreen ? 250 : 80} height={isFullscreen ? 250 : 80} />
      <div className="w-full flex flex-col items-center mt-8">
        <div className={`${isFullscreen ? 'w-[10%]' : 'w-1/3'} h-2 bg-gray-700 rounded-full overflow-hidden`}>
          <div
            className="h-full  transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
