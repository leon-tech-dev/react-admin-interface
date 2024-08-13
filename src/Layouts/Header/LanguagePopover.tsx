import React, { useState } from 'react';

import { Box, Popover, MenuItem, IconButton } from '@mui/material';
interface Language {
  value: string;
  label: string;
  icon: string;
}

const LANGS: Language[] = [
  {
    value: 'en',
    label: 'English',
    icon: '/src/assets/icons/languages/flag_en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/src/assets/icons/languages/flag_de.svg',
  },
  {
    value: 'fr',
    label: 'French',
    icon: '/src/assets/icons/languages/flag_fr.svg',
  },
  {
    value: 'cn',
    label: 'Chinese',
    icon: '/src/assets/icons/languages/flag_cn.svg',
  },
];

export default function LanguagePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          ...(open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1,
            ml: 0.75,
            width: 180,
          },
        }}
      >
        {LANGS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === LANGS[0].value}
            onClick={() => handleClose()}
            sx={{ typography: 'body2', py: 1 }}
          >
            <Box component="img" alt={option.label} src={option.icon} sx={{ width: 28, mr: 2 }} />

            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
