import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ChevronDown, ChevronRight } from 'lucide-react';
import routes, { RouteItem } from '../../router/routes';
import { RootState } from '../../store';

const MenuItem: React.FC<{ route: RouteItem; parentPath?: string }> = ({
  route,
  parentPath = '',
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = route.children && route.children.length > 0;
  const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');
  const isActive =
    location.pathname === fullPath ||
    (hasChildren &&
      route.children?.some((child) => location.pathname.startsWith(`${fullPath}/${child.path}`)));
  const userPermissions = useSelector((state: RootState) => state.auth.permissions);

  const hasPermission = (route: RouteItem): boolean => {
    if (!route.meta?.permissions) return true;
    return route.meta.permissions.every((permission) => userPermissions.includes(permission));
  };

  if (!hasPermission(route)) return null;

  if (!hasChildren) {
    return (
      <li>
        <Link
          to={fullPath}
          className={`flex items-center py-2 px-4 text-gray-800 hover:bg-gray-200 ${
            isActive ? 'bg-gray-200 font-semibold' : ''
          }`}
          aria-current={isActive ? 'page' : undefined}
        >
          {route.icon && <route.icon className="mr-2" size={18} aria-hidden="true" />}
          <span>{route.name}</span>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div
        className={`flex items-center py-2 px-4 text-gray-800 hover:bg-gray-200 cursor-pointer ${
          isActive ? 'bg-gray-200 font-semibold' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {route.icon && <route.icon className="mr-2" size={18} aria-hidden="true" />}
        <span>{route.name}</span>
        <span className="ml-auto">
          {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </div>
      {isOpen && (
        <ul className="pl-4">
          {route.children?.map((childRoute) => (
            <MenuItem key={childRoute.path} route={childRoute} parentPath={fullPath} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar: React.FC = () => {
  const menuRoutes = routes.filter((route: RouteItem) => route.meta?.showInMenu);

  return (
    <aside className="w-64 bg-white shadow-md" aria-label="Main Navigation">
      <nav className="mt-5">
        <ul>
          {menuRoutes.map((route: RouteItem) => (
            <MenuItem key={route.path} route={route} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
