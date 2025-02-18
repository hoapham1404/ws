import Home from '@/app/screens/ColorScreen';
import { Metadata } from 'next';
import { getRouteByPath } from '@/constants/routes';
import BlueScreenWindow10 from './components/BlueScreenWindow10';

export async function generateMetadata(): Promise<Metadata> {
  const screen = getRouteByPath("/screen-of-death-xp");

  if (!screen) {
    return { title: "Unknown Screen" };
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
  };
}

export default function Page() {
  return (
    <div>
      <BlueScreenWindow10/>
    </div>
  );
}
