import { usePathname, useRouter } from 'next/navigation';
import TemperatureSlider from './TemperatureSlider';
import { getColorNavigationRoutes, RouteStore } from '@/constants/routes';
import Link from 'next/link';
import { useTranslations } from 'next-intl';


export default function ScreenOptions() {
  const currentPath = usePathname();
  const navigate = useRouter();
  const routes = getColorNavigationRoutes();
  const t = useTranslations();

  return (
    <>
      {currentPath === '/zoom-lighting' && <TemperatureSlider />}

      <div className="flex flex-wrap justify-center mb-4 cursor-pointer">
        {routes.map((option: RouteStore) => (
          <Link key={option.name} href={option.path} className={`flex flex-col items-center p-6 ${option.path === currentPath ? 'bg-gray-300' : ''}`}>
            <button
              onClick={() => navigate.push(option.path)}
              className="w-24 md:w-32 h-12 md:h-16 rounded-md shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: option.color }}
            />
            <span className="mt-2 text-sm md:text-base underline">{t(`${option.path}.name`)}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
