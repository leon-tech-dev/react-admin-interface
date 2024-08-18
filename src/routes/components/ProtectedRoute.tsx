import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { RouteItem } from '@/routes/routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
  meta?: RouteItem['meta'];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, meta }) => {
  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated);
  const userPermissions = useSelector((state: RootState) => state.login.permissions);
  if (meta?.requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (
    meta?.permissions &&
    !meta.permissions.every((permission) => userPermissions.includes(permission))
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
