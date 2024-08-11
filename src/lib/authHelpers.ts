import { RouteItem } from '@/router/routes';

export const hasPermission = (route: RouteItem, permissions: string[]): boolean => {
  if (!route.meta?.permissions) return true;
  return route.meta.permissions.every((permission) => permissions.includes(permission));
};
