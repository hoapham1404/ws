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
    <React.Fragment>

      <div className="container mx-auto flex flex-col gap-4">
        <h2 className="text-3xl font-medium text-center text-gray-800 mb-4">
          People use {
            currentRoute.name.split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
          } for:
        </h2>

        <div className="flex flex-col gap-6">
          {tip.content && Object.entries(tip.content).map(([key, value]) => (
            <TipItem key={key} title={key} content={value} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {tip.subTips && Object.entries(tip.subTips).map(([Key, value]) => (
          <div key={Key}>
            <h3 className="font-semibold text-lg">{Key}</h3>
            <ul className="text-sm mt-2 space-y-1">
              {
                value.map((subTip, index) => (
                  <li key={index}>{subTip}</li>
                ))
              }
            </ul>
          </div>
        ))}
      </div>

    </React.Fragment>
  )
}
