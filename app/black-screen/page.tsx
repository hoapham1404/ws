import Home from '@/app/screens/ColorScreen';
<<<<<<< HEAD
import { Metadata } from 'next';
import { getRouteByPath } from '@/constants/routes';

export async function generateMetadata(): Promise<Metadata> {
  const screen = getRouteByPath("/black-screen");

  return {
    title: `Color: ${screen?.name || "Unknown"}`,

=======
import { Metadata } from 'next'
import { getRouteByPath } from '@/constants/routes';

export async function generateMetadata(
  { searchParams }: { searchParams: { path: string } }
): Promise<Metadata> {

  const path = searchParams.path;
  const screen = getRouteByPath(path);

  return {

    title: `Color: ${screen?.name}`,

>>>>>>> origin/dev/baotq/color-screen
    icons: screen?.color
      ? [{
        url: `data:image/svg+xml,
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
            <rect x='20' y='20' width='100' height='70' fill='${encodeURIComponent(screen?.color)}'/>
        </svg>` }]
      : screen?.icon
<<<<<<< HEAD
        ? [{ url: screen.icon }]
=======
        ? [{ url: screen?.icon }]
>>>>>>> origin/dev/baotq/color-screen
        : undefined,
  };
}

export default function Page() {
  return (
    <div>
      <Home />
    </div>
<<<<<<< HEAD
  );
}
=======
  )
} 
>>>>>>> origin/dev/baotq/color-screen
