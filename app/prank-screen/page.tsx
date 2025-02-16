import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const screen = { name: "Prank Screen", path: "/prank-screen", icon: "https://emojicdn.elk.sh/🤡" };

  return {
    title: `Color: ${screen.name}`,
    icons: [{ url: screen.icon }]
  }
}

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-4xl font-bold text-black">
        Hello World!
      </h1>
    </div>
  )
}
