import { lazy } from 'react';
import { LayoutDashboard, Users, Settings, List, FileText } from 'lucide-react';
import RootRedirect from './RootRedirect';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const UsersList = lazy(() => import('../pages/Users'));
const SettingsPage = lazy(() => import('../pages/Settings'));
const ReportsList = lazy(() => import('../pages/Reports/List'));
const ReportDetails = lazy(() => import('../pages/Reports/Details'));

export interface RouteItem {
  path: string;
  element?: React.LazyExoticComponent<() => JSX.Element> | React.FC;
  name: string;
  icon?: React.ElementType;
  children?: RouteItem[];
  meta?: {
    showInMenu: boolean;
    requiresAuth: boolean;
    permissions?: string[];
  };
}

const routes: RouteItem[] = [
  {
    path: '/',
    element: RootRedirect,
    name: 'Root',
    meta: {
      showInMenu: false,
      requiresAuth: true,
    },
  },
  {
    path: 'dashboard',
    element: Dashboard,
    name: 'Dashboard',
    icon: LayoutDashboard,
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
  },
  {
    path: 'users',
    element: UsersList,
    name: 'Users',
    icon: Users,
    meta: {
      showInMenu: true,
      requiresAuth: true,
      permissions: ['manage_users'],
    },
  },
  {
    path: 'reports',
    name: 'Reports',
    icon: FileText,
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
    children: [
      {
        path: 'list',
        element: ReportsList,
        name: 'All Reports',
        icon: List,
        meta: {
          showInMenu: true,
          requiresAuth: true,
        },
      },
      {
        path: 'details/:id',
        element: ReportDetails,
        name: 'Report Details',
        meta: {
          showInMenu: false,
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: 'settings',
    element: SettingsPage,
    name: 'Settings',
    icon: Settings,
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
  },
];

export default routes;
