import AppleLogo from "@/public/apple.jpg";
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function FakeOSUpdate() {
  const [progress, setProgress] = useState(0);

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
      <Image src={AppleLogo} alt="Apple Logo" width={80} height={80} />
      <div className="flex flex-col items-center mt-8">
        <div className="w-2/3 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white mt-4 text-lg">Installing macOS update...</p>
      </div>
    </div>
  );
}
