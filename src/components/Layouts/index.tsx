import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import usePageTitle from '../../hooks/usePageTitle';

const Layout: React.FC = () => {
  // dynamic change page title name
  usePageTitle();
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-auto" id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
