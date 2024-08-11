import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import usePageTitle from '@/hooks/usePageTitle';

const drawerWidth = 240;

const Layout: React.FC = () => {
  usePageTitle();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
