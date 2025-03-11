import Link from "next/link"
import LocalesDropdown from "./LocalesDropdown"

export default function Navbar() {
  return (
    <header className="my-4">
      <div className="container mx-auto px-28 h-20 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl">
            SCREEN
          </Link>
          <Link href="/" className="text-lg">
            Feedback
          </Link>
        </div>

        <LocalesDropdown />
      </div>
    </header>
  )
}
