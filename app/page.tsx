import Home from '@/app/screens/ColorScreen';
import { Metadata } from 'next';
import { getRouteByPath } from '@/constants/routes';
import { useRouteStore } from '@/store/store';
import { RouteStore } from '@/constants/routes';

export async function generateMetadata(): Promise<Metadata> {
  const { setRoutes } = useRouteStore.getState()
  const screen = getRouteByPath("/");

  const curreentRouteScreen: RouteStore = new RouteStore(screen?.name || "", screen?.path || "", screen?.color || "", screen?.icon || "", screen?.isAxis || false)
  console.log(curreentRouteScreen)
  setRoutes(curreentRouteScreen)

  return {
    title: `Color: ${screen?.name || "Unknown"}`,

    icons: screen?.color
      ? [{
        url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(screen?.color)}'/>
        </svg>` }]
      : screen?.icon
        ? [{ url: screen.icon }]
        : undefined,
  };
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}

