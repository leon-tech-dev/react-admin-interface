import React from 'react';
import { List, Typography, Stack } from '@mui/material';
import { RouteItem } from '@/router/routes';
import MenuItem from './MenuItem';
import Scrollbar from '@/components/Scrollbar';
import { RouterLink } from '@/routes/components';
interface MenuProps {
  menuRoutes: RouteItem[];
}
const Menu: React.FC<MenuProps> = ({ menuRoutes }) => {
  return (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Typography component={RouterLink} href="/" variant="h6" sx={{ p: 2 }}>
        React Admin
      </Typography>
      <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
        <List sx={{ mt: 1 }} component="nav" aria-label="Main Navigation">
          {menuRoutes.map((route: RouteItem, index: number) => (
            <MenuItem key={route.path} route={route} index={index} />
          ))}
        </List>
      </Stack>
    </Scrollbar>
  );
};

export default Menu;
