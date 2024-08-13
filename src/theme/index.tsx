import React, { useMemo, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { initializeTheme } from '@/store/slices/themeSlice';

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

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
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
  const dispatch = useDispatch<AppDispatch>();
  const { mode, systemPreference } = useSelector((state: RootState) => state.theme);
  useEffect(() => {
    dispatch(initializeTheme());
  }, [dispatch]);
  // const memoizedValue = useMemo<ThemeOptions>(
  //   () => ({
  //     palette: palette(mode),
  //     typography,
  //     shadows: shadows(),
  //     customShadows: customShadows(),
  //     shape: { borderRadius: 8 },
  //   }),
  //   [mode]
  // );

  // const theme = createTheme(memoizedValue);

  // const themeWithOverrides = useMemo(() => {
  //   const components = overrides(theme);
  //   return createTheme(theme, { components });
  // }, [theme]);
  const theme = useMemo(() => {
    const activeMode = mode === 'system' ? systemPreference : mode;

    const themeOptions = {
      palette: palette(activeMode),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    };

    let theme = createTheme(themeOptions);
    theme = createTheme(theme, { components: overrides(theme) });

    return theme;
  }, [mode, systemPreference]);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

// export default function ThemeProvider({ children }: ThemeProviderProps) {
//   return (
//     <ThemeContextProvider>
//       <ThemeProviderContent>{children}</ThemeProviderContent>
//     </ThemeContextProvider>
//   );
// }
