import { JSX } from "react";
import React from "react"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TipsSection(): JSX.Element {
  const path = usePathname()
  const t = useTranslations(path)
  const tRaw = useTranslations()
  const tip = t.raw("tip")

  return (
    <div>
      <h2 className="font-semibold text-left text-gray-800 text-wrap max-w-80">
        {tRaw("navigation.tip.header", { tipTitle: t("name") })}
      </h2>
      <Accordion type="single" collapsible>
        {tip.content && tip.content.map((item: { title: string, description: string }) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className="max-w-80">
              <p className="text-sm text-wrap">{item.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


      <h2 className="font-semibold text-left text-gray-800 mt-4 text-wrap max-w-80">
        {tRaw("sidebar.other_tips")}
      </h2>
      <Accordion type="single" collapsible className="flex flex-col">
        {tip.subTips && tip.subTips.map((item: { title: string, content: string[] }) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className="grid grid-cols-1">
              {item.content.map((content: string, index) => (
                <p key={index} className="text-sm text-balance ">{content}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}


