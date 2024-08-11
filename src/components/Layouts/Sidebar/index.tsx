import React from 'react';
import { List, Drawer, Box, Typography } from '@mui/material';
import routes, { RouteItem } from '../../../router/routes';
import MenuItem from './MenuItem';

const Sidebar: React.FC = () => {
  const menuRoutes = routes.filter((route: RouteItem) => route.meta?.showInMenu);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <Typography variant="h6" sx={{ p: 2 }}>
          React Admin
        </Typography>
        <List sx={{ mt: 1 }} component="nav" aria-label="Main Navigation">
          {menuRoutes.map((route: RouteItem) => (
            <MenuItem key={route.path} route={route} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
