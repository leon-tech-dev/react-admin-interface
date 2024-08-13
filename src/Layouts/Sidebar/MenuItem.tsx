import React, { useState, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Box, List, Collapse, ListItemButton, styled } from '@mui/material';
import { RootState } from '@/store';
import { RouteItem } from '@/router/routes';
import { matchPath } from '@/lib/routeHelpers';
import { hasPermission } from '@/lib/authHelpers';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MenuItem: React.FC<{
  route: RouteItem;
  parentPath?: string;
  level?: number;
  index: number;
}> = ({ route, parentPath = '', level = 0, index }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = route.children && route.children.length > 0;
  const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');
  const isActive = matchPath(location.pathname, fullPath);
  const isActiveChild = hasChildren
    ? route.children?.some((child) => matchPath(location.pathname, `${fullPath}/${child.path}`))
    : false;
  const userPermissions = useSelector((state: RootState) => state.login.permissions);

  useEffect(() => {
    setIsOpen(!!isActiveChild);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!hasPermission(route, userPermissions)) return null;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const listItemContent = (
    <>
      <Box component="span" sx={{ width: 24, height: 24, mr: 2, pl: level * 6 }}>
        {route.icon ? route.icon : ''}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box component="span">{route.name}</Box>
        {hasChildren && (isOpen ? <ExpandMore /> : <ExpandLess />)}
      </Box>
    </>
  );

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={isActive || isActiveChild}
        sx={{
          marginTop: index === 0 && level === 0 ? '0px' : '4px',
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          ...((isActive || isActiveChild) && {
            color: 'primary.main',
            fontWeight: 'fontWeightSemiBold',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
            },
          }),
        }}
        component={hasChildren ? 'div' : StyledLink}
        to={hasChildren ? undefined : fullPath}
      >
        {listItemContent}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.children?.map((childRoute, index) => (
              <MenuItem
                key={childRoute.path}
                route={childRoute}
                parentPath={fullPath}
                level={level + 1}
                index={index}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
export default MenuItem;
