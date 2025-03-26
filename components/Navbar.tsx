import Link from "next/link";
import LocalesDropdown from "./LocalesDropdown";
import ScreensNavBar from "./ScreensNavBar";

export default function Navbar() {
  return (
    <header className="my-4">
      <div className="container mx-auto px-28 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl">
            WHITESCREEN
          </Link>
          <Link href="/" className="text-lg">
            Feedback
          </Link>
        </div>

        <div className="flex flex-row items-center gap-4">
          <ScreensNavBar />
          <LocalesDropdown />
        </div>
      </div>
    </header>
  );
}
