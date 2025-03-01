"use client"
import UbuntuLogo from "@/public/ubuntu-logo.png";
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function FakeUbuntu() {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 5);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#2c001e] flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full">
        <Image src={UbuntuLogo} alt="Ubuntu Logo" width={120} height={120} />
        <div className="flex gap-2 mt-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full ${index === activeDot ? 'bg-red-500' : 'bg-white'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
