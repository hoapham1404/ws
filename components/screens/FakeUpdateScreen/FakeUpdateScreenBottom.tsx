import { getFakeUpdateRoutes } from '@/constants/routes';
import NavigationBottom from '@/components/BasicColorPage/NavigationBottom';

export const FakeUpdateScreenBottom = () => {
  const defaultRoutes = getFakeUpdateRoutes();

  return (
    <NavigationBottom routes={defaultRoutes} />
  );
};
