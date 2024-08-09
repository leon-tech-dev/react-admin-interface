import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from '../../router/routes';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-md" aria-label="Main Navigation">
      <nav className="mt-5">
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`flex items-center py-2 px-4 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                  location.pathname === `/${route.path}` ? 'bg-gray-200 font-semibold' : ''
                }`}
                aria-current={location.pathname === `/${route.path}` ? 'page' : undefined}
              >
                <route.icon className="mr-2" size={18} aria-hidden="true" />
                <span>{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
