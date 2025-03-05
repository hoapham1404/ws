import { usePathname } from "next/navigation"
import React from "react"
import TipItem from "./TipItem"
import { useTranslations } from "next-intl"

export default function ScreenTip() {
  const path = usePathname()
  const t = useTranslations(path)
  const tRaw = useTranslations()
  const tip = t.raw("tip")

  if (!tip) return null;

  return (
    <React.Fragment>
      <div className="container mx-auto flex flex-col gap-4">
        <h2 className="text-3xl font-medium text-center text-gray-800 mb-4">
          {tRaw("navigation.tip.header", { tipTitle: t("name") })}
        </h2>

        <div className="flex flex-col gap-6">
          {tip.content && tip.content.map((item: { title: string, description: string }) => (
            <TipItem key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {tip.subTips && tip.subTips.map((item: { title: string, content: string[] }) => (
          <div key={item.title}>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <ul className="text-sm mt-2 space-y-1">
              {item.content.map((subTip, index) => (
                <li key={index}>{subTip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </React.Fragment>
  )
}
