import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import motivationQuotesStore from "./motivationQuotesStore"

const BASE_PARAGRAPH_SIZE = 14
const BASE_AUTHOR_SIZE = 12

export default function MotivationQuotesPreview() {
  const pathname = usePathname();
  const t = useTranslations(pathname);
  const { paragraph, author, additionalSize, setParagraph, setAuthor } = motivationQuotesStore()

  useEffect(() => {
    const defaultParagraph = t("quote.paragraph")
    const defaultAuthor = t("quote.author")
    setParagraph(defaultParagraph)
    setAuthor(defaultAuthor)
  }, [setAuthor, setParagraph, t])

  return (
    <div className="relative w-full h-full flex items-center justify-center ">
      <div className="max-w-2xl p-8 text-center overflow-hidden">
        <p
          style={{ fontSize: `${BASE_PARAGRAPH_SIZE + additionalSize}px` }}
          className="mb-4 overflow-auto max-h-[60vh] break-words"
        >
          {paragraph}
        </p>
        <p style={{ fontSize: `${BASE_AUTHOR_SIZE + additionalSize}px` }} className="mt-4">
          - {author}
        </p>
      </div>
    </div>
  )
}
