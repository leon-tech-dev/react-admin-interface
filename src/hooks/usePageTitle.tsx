import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import routes, { RouteItem } from '../routes/routes';

const usePageTitle = (customTitle?: string) => {
  const location = useLocation();

  const getRouteTitle = () => {
    const findRouteTitle = (routes: RouteItem[], pathname: string): string => {
      for (const route of routes) {
        if (pathname === '/' + route.path) {
          return route.name;
        }
        if (route.children) {
          const childPath = pathname.startsWith('/' + route.path)
            ? pathname.substring(route.path.length + 1)
            : pathname;
          const childTitle = findRouteTitle(route.children, childPath);
          if (childTitle) {
            // For nested routes, combine parent and child names
            return `${route.name} - ${childTitle}`;
          }
        }
      }
      return '';
    };

    return findRouteTitle(routes, location.pathname);
  };

  const title = customTitle || getRouteTitle();

  useEffect(() => {
    const baseTitle = 'React Admin';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
  }, [title]);

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default usePageTitle;
