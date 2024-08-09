import { createBrowserRouter, Outlet, RouteObject } from 'react-router-dom';
import { Suspense, ComponentType } from 'react';
import Layout from '../components/Layouts';
import Login from '../pages/Login';
import routes, { RouteItem } from './routes';
import ProtectedRoute from './ProtectedRoute';

// Helper function to check if a route element is a React component
const isReactComponent = (element: unknown): element is ComponentType => {
  return (
    typeof element === 'function' ||
    (typeof element === 'object' && element !== null && '$$typeof' in element)
  );
};

type CustomRouteObject = RouteObject & {
  meta?: RouteItem['meta'];
};

// This function will recursively create route objects
const createRoutes = (routes: RouteItem[]): CustomRouteObject[] => {
  return routes.map((route) => {
    const RouteElement = route.element;
    if (route.children) {
      return {
        path: route.path,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute meta={route.meta}>
              {RouteElement && isReactComponent(RouteElement) ? <RouteElement /> : <Outlet />}
            </ProtectedRoute>
          </Suspense>
        ),
        children: createRoutes(route.children),
      };
    }
    return {
      path: route.path,
      element:
        RouteElement && isReactComponent(RouteElement) ? (
          <Suspense fallback={<div>Loading...</div>}>
            {route.meta?.requiresAuth ? (
              <ProtectedRoute meta={route.meta}>
                <RouteElement />
              </ProtectedRoute>
            ) : (
              <RouteElement />
            )}
          </Suspense>
        ) : null,
    };
  });
};

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Layout />,
    children: createRoutes(routes),
  },
]);

export default router;
