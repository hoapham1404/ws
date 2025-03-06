import { useState, useEffect } from "react";
import FlipUnit from "./FlipUnit";
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen";
export default function FlipClock() {
  const [time, setTime] = useState<Date | null>(null);
  const { isFullscreen } = useFullScreen();
  useEffect(() => {
    setTime(new Date());

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const formatTime = (date: Date) => ({
    hours: String(date.getHours()).padStart(2, "0"),
    minutes: String(date.getMinutes()).padStart(2, "0"),
    seconds: String(date.getSeconds()).padStart(2, "0"),
  });

  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="h-full bg-white flex items-center justify-center">
      <div className=" flex gap-2 text-4xl font-bold items-center">
        <FlipUnit number={hours[0]} />
        <FlipUnit number={hours[1]} />
        <span className={`${isFullscreen ? 'text-[10rem]' : 'text-4xl'}`}>:</span>
        <FlipUnit number={minutes[0]} />
        <FlipUnit number={minutes[1]} />
        <span className={`${isFullscreen ? 'text-[10rem]' : 'text-4xl'}`}>:</span>
        <FlipUnit number={seconds[0]} />
        <FlipUnit number={seconds[1]} />
      </div>
    </div>
  );
}
