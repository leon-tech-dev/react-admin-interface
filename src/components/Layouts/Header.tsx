import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.user);

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
        {username && <div className="text-gray-600">Welcome, {username}</div>}
      </div>
    </header>
  );
};

export default Header;
