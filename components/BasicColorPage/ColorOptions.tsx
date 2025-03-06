import { getColorRoutes, RouteStore } from '@/constants/routes'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function ColorOptions() {
  const colorRoutes = getColorRoutes()
  const t = useTranslations()
  const pathname = usePathname()


  return (
    <div className="h-full flex flex-col justify-between gap-4">
      {
        colorRoutes.filter((route: RouteStore) => route.isAxis && route.color).map((route: RouteStore) => {
          return (
            <Link
              key={route.path}
              href={route.path}
              className={`h-full px-4 py-2 flex items-center  gap-5 text-left rounded text-wrap
                ${pathname === route.path ? 'bg-gray-200' : ''}
              `}
            >
              <div className={"w-16 h-8 rounded"}
                style={{
                  backgroundColor: route.color,
                  boxShadow: `0 0 16px 0 rgba(0, 0, 0, 0.3)`
                }}
              />
              <span className={"underline "}>{t(`${route.path}.name`)}</span>
            </Link>
          )
        })
      }
    </div>
  )
}
