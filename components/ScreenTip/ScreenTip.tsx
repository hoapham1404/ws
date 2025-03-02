"use client"
import { getRouteByPath } from "@/constants/routes"
import { usePathname } from "next/navigation"
import React from "react"
import { useEffect, useState } from "react"
import TipItem from "./TipItem"

export default function ScreenTip() {
  const path = usePathname()
  const currentRoute = getRouteByPath(path)
  if (!currentRoute) return null

  const { tip } = currentRoute;
  if (!tip) return null;

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h2 className="text-3xl font-medium text-center text-gray-800 mb-4">
        People use {
          // not to capitalize all the words
          currentRoute.name.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        } for:
      </h2>

      <div className="flex flex-col gap-6">
        {/* Main tips */}
        {tip.content && Object.entries(tip.content).map(([key, value]) => (
          <TipItem key={key} title={key} content={value} />
        ))}

        {/* Sub tips */}
        {tip.subTips && Object.entries(tip.subTips).map(([key, value]) => (
          <div key={key} className="flex flex-col gap-4">
            <h3 className="text-xl font-medium text-gray-800">{key}</h3>
            {value.map((subTip) => (
              <TipItem key={subTip} title={subTip} content={subTip} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
