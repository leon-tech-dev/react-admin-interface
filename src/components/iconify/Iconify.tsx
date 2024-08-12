import { forwardRef } from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

interface IconifyProps {
  icon: IconifyIcon | string;
  width?: number;
  sx?: SxProps<Theme>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // for other props
}

const Iconify = forwardRef<HTMLSpanElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      className="component-iconify"
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
);

Iconify.displayName = 'Iconify';

export default Iconify;
