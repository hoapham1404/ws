import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/router"

export default function Navbar() {
  const { locale, asPath } = useRouter()
  return (
    <header className="py-[20px]">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-xl">
            WS
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Feedback
          </Link>
        </div>
        <Select defaultValue="en">
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">
              <Link href={asPath} locale="en">
                English
              </Link>
            </SelectItem>
            <SelectItem value="es">
              <Link href={asPath} locale="es">
                Español
              </Link>
            </SelectItem>
            <SelectItem value="fr">
              <Link href={asPath} locale="fr">
                Français
              </Link>
            </SelectItem>
            <SelectItem value="vi">
              <Link href={asPath} locale="vi">
                Tiếng Việt
              </Link>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
