import { lazy } from 'react';
import { LayoutDashboard, Users, Settings } from 'lucide-react';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const UsersList = lazy(() => import('../pages/Users'));
const SettingsPage = lazy(() => import('../pages/Settings'));

export interface RouteItem {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  name: string;
  icon: React.ElementType;
  children?: RouteItem[];
}

const routes: RouteItem[] = [
  {
    path: 'dashboard',
    element: Dashboard,
    name: 'Dashboard',
    icon: LayoutDashboard,
  },
  {
    path: 'users',
    element: UsersList,
    name: 'Users',
    icon: Users,
  },
  {
    path: 'settings',
    element: SettingsPage,
    name: 'Settings',
    icon: Settings,
  },
];

export default routes;
