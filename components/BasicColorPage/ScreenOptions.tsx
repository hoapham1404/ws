import { usePathname } from 'next/navigation';
import TemperatureSlider from './TemperatureSlider';
import { getColorNavigationRoutes, RouteStore } from '@/constants/routes';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import NavigationBottom from './NavigationBottom';


export default function ScreenOptions() {
  const currentPath = usePathname();
  const routes = getColorNavigationRoutes();
  const t = useTranslations();

  return (
    <>
      {currentPath === '/zoom-lighting' && <TemperatureSlider />}
      <NavigationBottom routes={routes} />
    </>
  );
}
