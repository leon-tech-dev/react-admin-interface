import React from 'react';
import { Navigate } from 'react-router-dom';

const RootRedirect: React.FC = () => {
  return <Navigate to="/dashboard" replace />;
};

export default RootRedirect;
