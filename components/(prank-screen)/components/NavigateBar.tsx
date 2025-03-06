import { getPrankRoutes, RouteStore } from "@/constants/routes";
import NavigationBottom from "@/components/BasicColorPage/NavigationBottom";


export default function NavigateBar() {
  const defaultRoutes = getPrankRoutes();

  return (
    <NavigationBottom routes={defaultRoutes} />
  );
}
