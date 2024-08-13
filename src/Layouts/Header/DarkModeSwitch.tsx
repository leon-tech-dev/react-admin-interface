import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DarkMode from '@mui/icons-material/DarkMode';
import WbSunny from '@mui/icons-material/WbSunny';
import { RootState } from '@/store';
import { setMode, ThemeMode } from '@/store/slices/themeSlice';
import { useTheme } from '@mui/material/styles';

export const ThemeModeSwitch: React.FC = () => {
  const dispatch = useDispatch();
  const { mode, systemPreference } = useSelector((state: RootState) => state.theme);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModeSelect = (selectedMode: ThemeMode) => {
    dispatch(setMode(selectedMode));
    handleClose();
  };

  const getIcon = (iconMode: ThemeMode | 'effective') => {
    switch (iconMode) {
      case 'light':
        return <WbSunny />;
      case 'dark':
        return <DarkMode />;
      case 'system':
        return systemPreference === 'light' ? <WbSunny /> : <DarkMode />;
    }
  };

  const iconColor = theme.palette.mode === 'light' ? theme.palette.text.secondary : 'inherit';

  const getDisplayMode = (displayMode: ThemeMode) => {
    return displayMode === 'system' ? `System (${systemPreference})` : displayMode;
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        sx={{
          color: iconColor,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        }}
      >
        {getIcon(mode)}
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {(['light', 'dark', 'system'] as ThemeMode[]).map((itemMode) => (
          <MenuItem
            key={itemMode}
            onClick={() => handleModeSelect(itemMode)}
            selected={mode === itemMode}
          >
            <ListItemIcon>{getIcon(itemMode)}</ListItemIcon>
            <ListItemText>{getDisplayMode(itemMode)}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
