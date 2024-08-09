import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { RouteItem } from '../router/routes';

interface ProtectedRouteProps {
  children: React.ReactNode;
  meta?: RouteItem['meta'];
}
// This component will handle the auth check
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, meta }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const userPermissions = useSelector((state: RootState) => state.auth.permissions);

  if (!isAuthenticated) {
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
