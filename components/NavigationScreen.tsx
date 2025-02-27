'use client';

import { FakeUpdateScreenBottom } from "@/app/screens/FakeUpdateScreen/FakeUpdateScreenBottom";
import ScreenOptions from "./BasicColorPage/ScreenOptions";
import { DVDBottom } from "./DVDSaver/DVDBottom";

export default function NavigationScreen() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-2xl">Color Screens</p>
        <ScreenOptions />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-2xl">Fake Update Screen</p>
        <FakeUpdateScreenBottom />
      </div>

      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-2xl">Screen Saver</p>
        <DVDBottom />
      </div>
    </div>
  );
}
