import { getColorRoutes } from '@/constants/routes'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function ColorOptions() {
  const colorRoutes = getColorRoutes()
  const t = useTranslations()

  return (
    <>
      {colorRoutes.filter(route => route.isAxis === true && route.color != null && route.color != undefined).map((route) => (
        <Link key={route.path} href={route.path} className="flex items-center gap-5 w-full md:w-80 px-4 py-2 text-left rounded hover:opacity-90 underline">
          <div
            className="w-12 md:w-14 h-8 rounded"
            style={{
              backgroundColor: route.color,
              boxShadow: `0 0 16px 0 rgba(0, 0, 0, 0.3)`
            }}
          ></div>
          <span>{t(`${route.path}.name`)}</span>
        </Link>
      ))}
    </>
  )
}
