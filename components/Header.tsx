import { useRouteStore } from "@/store/store";

export default function Header() {
  const { currentRoute } = useRouteStore();
  const title = currentRoute?.name || '';
  console.log(currentRoute)

  return (
    <header className="text-center mb-12 mt-16">
      <h1 className="text-5xl ">{title}</h1>
    </header>
  )
} 