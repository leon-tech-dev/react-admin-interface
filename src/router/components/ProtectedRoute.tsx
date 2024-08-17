import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { RouteItem } from '@/router/routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
  meta?: RouteItem['meta'];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, meta }) => {
  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
  const userPermissions = useSelector((state: RootState) => state.login.permissions);
  console.log(!meta?.requiresAuth);
  if (meta?.requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (
    meta?.permissions &&
    !meta.permissions.every((permission) => userPermissions.includes(permission))
  ) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
