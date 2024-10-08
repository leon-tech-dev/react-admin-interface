import { lazy } from 'react';
import { RootRedirect } from './components';

import { icon } from './components';

const Dashboard = lazy(() => import('../pages/Dashboard/view'));
const UsersList = lazy(() => import('../pages/Users/view'));
const SettingsPage = lazy(() => import('../pages/Settings'));
const ProductPage = lazy(() => import('../pages/Product/view'));
const BlogPage = lazy(() => import('../pages/Blog/view'));
const ErrorPage = lazy(() => import('../pages/Error'));

export interface RouteItem {
  path: string;
  element?: React.LazyExoticComponent<() => JSX.Element> | React.FC;
  name: string;
  icon?: JSX.Element;
  children?: RouteItem[];
  meta?: {
    showInMenu: boolean;
    requiresAuth: boolean;
    permissions?: string[];
    breadcrumbs?: boolean;
    external?: boolean;
    url?: string;
    target?: boolean;
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
    icon: icon('dashboard'),
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
  },
  {
    path: 'users',
    element: UsersList,
    name: 'Users',
    icon: icon('user'),
    meta: {
      showInMenu: true,
      requiresAuth: true,
      permissions: ['manage_users'],
    },
  },
  {
    path: 'blogs',
    element: BlogPage,
    name: 'Blog',
    icon: icon('blog'),
    meta: {
      showInMenu: true,
      requiresAuth: true,
      permissions: ['manage_users'],
    },
  },
  // {
  //   path: 'reports',
  //   name: 'Reports',
  //   // icon: FileText,
  //   meta: {
  //     showInMenu: true,
  //     requiresAuth: true,
  //   },
  //   children: [
  //     {
  //       path: 'list',
  //       element: ReportsList,
  //       name: 'All Reports',
  //       // icon: List,
  //       meta: {
  //         showInMenu: true,
  //         requiresAuth: true,
  //       },
  //     },
  //     {
  //       path: 'details/:id',
  //       element: ReportDetails,
  //       name: 'Report Details',
  //       meta: {
  //         showInMenu: false,
  //         requiresAuth: true,
  //       },
  //     },
  //   ],
  // },
  {
    path: 'products',
    element: ProductPage,
    name: 'Product',
    icon: icon('cart'),
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
  },
  {
    path: 'settings',
    element: SettingsPage,
    name: 'Settings',
    icon: icon('settings'),
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
  },
  {
    path: 'error',
    name: 'Error',
    meta: {
      showInMenu: true,
      requiresAuth: true,
    },
    children: [
      {
        path: '404',
        name: '404',
        element: ErrorPage,
      },
    ],
  },
];

export default routes;
