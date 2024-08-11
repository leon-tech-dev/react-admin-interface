import React from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { RootState } from '@/store';

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.login.user);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        {username && (
          <Box>
            <Typography variant="body1" color="inherit">
              Welcome, {username}
            </Typography>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
