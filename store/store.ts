import { create } from 'zustand'
import routes, { RouteStore } from '@/constants/routes'

interface RouteStoreState {
    routes: RouteStore[]
    currentRoute: RouteStore | null
    setCurrentRoute: (path: string) => void
    setRoutes: (route: RouteStore) => void
}

export const useRouteStore = create<RouteStoreState>((set) => ({
    routes: routes,
    currentRoute: null,
    setCurrentRoute: (path) => {
        set((state) => {
            const route = state.routes.find(r => r.path === path);
            return { currentRoute: route };
        });
    },
    setRoutes: (route: RouteStore) => {
        set({
            currentRoute: new RouteStore(route.name, route.path, route.color, route.icon, route.isAxis)
        });
    }
}));
