import { usePathname } from 'next/navigation';
import TemperatureSlider from './TemperatureSlider';
import { getColorNavigationRoutes } from '@/constants/routes';
import NavigationBottom from './NavigationBottom';


export default function ScreenOptions() {
  const currentPath = usePathname();
  const routes = getColorNavigationRoutes();

  return (
    <>
      {currentPath === '/zoom-lighting' && <TemperatureSlider />}
      <NavigationBottom routes={routes} />
    </>
  );
}
