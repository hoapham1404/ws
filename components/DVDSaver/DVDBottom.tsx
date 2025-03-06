import { getScreenSaverRoutes } from '@/constants/routes';
import NavigationBottom from '../BasicColorPage/NavigationBottom';

export const DVDBottom = () => {
  const defaultRoutes = getScreenSaverRoutes();
  return (
    <NavigationBottom routes={defaultRoutes} />
  );
};
