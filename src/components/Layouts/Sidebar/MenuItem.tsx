import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ExpandMore, ChevronRight } from '@mui/icons-material';
import { List, ListItemIcon, ListItemText, Collapse, ListItemButton, styled } from '@mui/material';
import { RootState } from '../../../store';
import { RouteItem } from '../../../router/routes';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const MenuItem: React.FC<{ route: RouteItem; parentPath?: string; level?: number }> = ({
  route,
  parentPath = '',
  level = 0,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = route.children && route.children.length > 0;
  const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');
  const isActive =
    location.pathname === fullPath ||
    (hasChildren &&
      route.children?.some((child) => location.pathname.startsWith(`${fullPath}/${child.path}`)));
  const userPermissions = useSelector((state: RootState) => state.login.permissions);

  const hasPermission = (route: RouteItem): boolean => {
    if (!route.meta?.permissions) return true;
    return route.meta.permissions.every((permission) => userPermissions.includes(permission));
  };

  if (!hasPermission(route)) return null;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  const listItemContent = (
    <>
      {route.icon && (
        <ListItemIcon>
          <route.icon fontSize="small" />
        </ListItemIcon>
      )}
      <ListItemText primary={route.name} />
      {hasChildren && (isOpen ? <ExpandMore /> : <ChevronRight />)}
    </>
  );

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={isActive}
        sx={{ pl: 2 * (level + 1) }}
        component={hasChildren ? 'div' : StyledLink}
        to={hasChildren ? undefined : fullPath}
      >
        {listItemContent}
      </ListItemButton>
      {hasChildren && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.children?.map((childRoute) => (
              <MenuItem
                key={childRoute.path}
                route={childRoute}
                parentPath={fullPath}
                level={level + 1}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
export default MenuItem;
