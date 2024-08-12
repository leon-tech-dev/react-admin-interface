// theme/index.tsx
import React, { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  Theme,
  ThemeOptions,
} from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { overrides } from './overrides';
import { typography } from './typography';
import { customShadows, CustomShadows } from './custom-shadows';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }
  interface ThemeOptions {
    customShadows?: CustomShadows;
  }
  interface TypographyVariants {
    fontWeightSemiBold: number;
  }
  interface TypographyVariantsOptions {
    fontWeightSemiBold?: number;
  }
  interface TypeBackground {
    neutral?: string;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
  }
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const memoizedValue = useMemo<ThemeOptions>(
    () => ({
      palette: palette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  const themeWithOverrides = useMemo(() => {
    const components = overrides(theme);
    return createTheme(theme, { components });
  }, [theme]);

  return (
    <MUIThemeProvider theme={themeWithOverrides}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

// If you need to use the theme elsewhere in your app:
export type ExtendedTheme = Theme & {
  customShadows: CustomShadows;
};
