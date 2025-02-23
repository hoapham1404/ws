'use client'

import { getColorRoutes } from '@/constants/routes'
import { useRouter } from 'next/navigation'

export default function ColorOptions() {

  const navigate = useRouter()

  const navigateTo = (path: string) => {
    navigate.push(path)
  }

  const colorRoutes = getColorRoutes()

  return (
    <>
      {colorRoutes.filter(route => route.isAxis === true && route.color != null && route.color != undefined).map((route) => (
        <button
          key={route.name}
          onClick={() => navigateTo(route.path)}
          className="flex items-center gap-5 w-full md:w-80 px-4 py-2 text-left rounded hover:opacity-90 underline"
        >
          <div
            className="w-12 md:w-14 h-8 rounded"
            style={{
              backgroundColor: route.color,
              boxShadow: `0 0 16px 0 rgba(0, 0, 0, 0.3)`
            }}
          ></div>
          <span>{route.name}</span>
        </button>
      ))}
    </>
  )
}
