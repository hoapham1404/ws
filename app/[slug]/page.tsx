import { getRouteByPath } from "@/constants/routes"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import ColorPicker from "../components/ColorPicker"

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const screen = getRouteByPath(`/${(await params).slug
    .replace(/[^a-z0-9-]/gi, "")
    .toLowerCase()}`)

  if (!screen) {
    return notFound()
  }

  return {
    title: `Color: ${screen.name}`,

    icons: screen.color
      ? [{
        url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
          <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(screen.color)}'/>
        </svg>` }]
      : screen.icon
        ? [{ url: screen.icon }]
        : undefined,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const screen = getRouteByPath(`/${(await params).slug
    .replace(/[^a-z0-9-]/gi, "")
    .toLowerCase()}`)

  return (
    <div>
      <ColorPicker color={screen?.color} />
    </div>
  )
}
