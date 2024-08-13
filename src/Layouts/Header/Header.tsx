import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme, Theme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { SxProps } from '@mui/system';

import { useResponsive } from '@/hooks/useResponsive';

import { bgBlur } from '@/theme/css';

import Iconify from '@/components/iconify';

// import SearchBar from './SearchBar';
import { NAV, HEADER } from '../ConfigLayout';
import AccountPopover from './AccountPopover';
import LanguagePopover from './LanguagePopover';
import NotificationsPopover from './NotificationsPopover';
import { ThemeModeSwitch } from './DarkModeSwitch';
// import { RootState } from '@/store';

interface HeaderProps {
  onOpenNav: () => void;
}

type BgBlurReturn = {
  backdropFilter: string;
  WebkitBackdropFilter: string;
  backgroundColor: string;
};

export default function Header({ onOpenNav }: HeaderProps) {
  const theme = useTheme();
  console.log(theme.palette.background.default);
  const lgUp = useResponsive('up', 'lg');

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {/* <SearchBar /> */}

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        <ThemeModeSwitch />
        <LanguagePopover />
        <NotificationsPopover />
        <AccountPopover />
      </Stack>
    </>
  );

  const appBarSx: SxProps<Theme> = {
    boxShadow: 'none',
    height: HEADER.H_MOBILE,
    zIndex: theme.zIndex.appBar + 1,
    transition: theme.transitions.create(['height'], {
      duration: theme.transitions.duration.shorter,
    }),
    backgroundImage: 'none',
    ...(lgUp && {
      width: `calc(100% - ${NAV.WIDTH + 1}px)`,
      height: HEADER.H_DESKTOP,
    }),
    ...(bgBlur({
      color: theme.palette.background.default,
    }) as BgBlurReturn),
  };

  return (
    <AppBar sx={appBarSx}>
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
