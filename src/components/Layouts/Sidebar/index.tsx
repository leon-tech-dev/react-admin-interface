import React, { useEffect } from 'react';
import { Drawer, Box } from '@mui/material';
import routes, { RouteItem } from '@/router/routes';
// import MenuItem from './MenuItem';
import Menu from './Menu';

import { useResponsive } from '@/hooks/useResponsive';
import { usePathname } from '@/router/hooks/usePathname';
import { NAV } from '../ConfigLayout';

type SidebarProps = {
  openNav: boolean;
  onCloseNav: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ openNav, onCloseNav }) => {
  const menuRoutes = routes.filter((route: RouteItem) => route.meta?.showInMenu);
  const pathname = usePathname();
  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <Menu menuRoutes={menuRoutes} />
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          <Menu menuRoutes={menuRoutes} />
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
