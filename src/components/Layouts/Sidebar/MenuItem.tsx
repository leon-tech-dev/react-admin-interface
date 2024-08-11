import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { List, ListItemIcon, ListItemText, Collapse, ListItemButton, styled } from '@mui/material';
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

const MenuItem: React.FC<{ route: RouteItem; parentPath?: string; level?: number }> = ({
  route,
  parentPath = '',
  level = 0,
}) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = route.children && route.children.length > 0;
  const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');
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
      {route.icon && (
        <ListItemIcon>
          <route.icon fontSize="small" />
        </ListItemIcon>
      )}
      <ListItemText primary={route.name} />
      {hasChildren && (isOpen ? <ExpandMore /> : <ExpandLess />)}
    </>
  );

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        selected={matchPath(location.pathname, fullPath)}
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
