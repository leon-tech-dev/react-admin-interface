import { PaletteOptions } from '@mui/material';

export const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    lighter: '#CCF4FE',
    light: '#68CDF9',
    main: '#078DEE',
    dark: '#0351AB',
    darker: '#012972',
    contrastText: '#FFFFFF',
  },
  secondary: {
    lighter: '#EFD6FF',
    light: '#C684FF',
    main: '#8E33FF',
    dark: '#5119B7',
    darker: '#27097A',
    contrastText: '#FFFFFF',
  },
  info: {
    lighter: '#CAFDF5',
    light: '#61F3F3',
    main: '#00B8D9',
    dark: '#006C9C',
    darker: '#003768',
    contrastText: '#FFFFFF',
  },
  success: {
    lighter: '#D3FCD2',
    light: '#77ED8B',
    main: '#22C55E',
    dark: '#118D57',
    darker: '#065E49',
    contrastText: '#FFFFFF',
  },
  warning: {
    lighter: '#FFF5CC',
    light: '#FFD666',
    main: '#FFAB00',
    dark: '#B76E00',
    darker: '#7A4100',
    contrastText: '#1C252E',
  },
  error: {
    lighter: '#FFE9D5',
    light: '#FFAC82',
    main: '#FF5630',
    dark: '#B71D18',
    darker: '#7A0916',
    contrastText: '#FFFFFF',
  },
  grey: {
    50: '#FCFDFD',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#DFE3E8',
    400: '#C4CDD5',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#1C252E',
    900: '#141A21',
  },
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  text: {
    primary: '#1C252E',
    secondary: '#637381',
    disabled: '#919EAB',
  },
  background: {
    paper: '#FFFFFF',
    default: '#FFFFFF',
    neutral: '#F4F6F8',
  },
  action: {
    active: '#637381',
    hover: 'rgba(145, 158, 171, 0.08)',
    selected: 'rgba(145, 158, 171, 0.16)',
    disabled: 'rgba(145, 158, 171, 0.8)',
    disabledBackground: 'rgba(145, 158, 171, 0.24)',
    focus: 'rgba(145, 158, 171, 0.24)',
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  divider: 'rgba(145, 158, 171, 0.2)',
};

export const componentColorsLight = {
  Alert: {
    errorColor: 'rgb(102, 68, 52)',
    infoColor: 'rgb(38, 97, 97)',
    successColor: 'rgb(47, 94, 55)',
    warningColor: 'rgb(102, 85, 40)',
    errorFilledBg: '#FF5630',
    infoFilledBg: '#00B8D9',
    successFilledBg: '#22C55E',
    warningFilledBg: '#FFAB00',
    errorFilledColor: '#fff',
    infoFilledColor: 'rgba(0, 0, 0, 0.87)',
    successFilledColor: 'rgba(0, 0, 0, 0.87)',
    warningFilledColor: 'rgba(0, 0, 0, 0.87)',
    errorStandardBg: 'rgb(255, 246, 242)',
    infoStandardBg: 'rgb(239, 253, 253)',
    successStandardBg: 'rgb(241, 253, 243)',
    warningStandardBg: 'rgb(255, 250, 239)',
    errorIconColor: '#FF5630',
    infoIconColor: '#00B8D9',
    successIconColor: '#22C55E',
    warningIconColor: '#FFAB00',
  },
  AppBar: {
    defaultBg: '#F9FAFB',
  },
  Avatar: {
    defaultBg: '#C4CDD5',
  },
  Button: {
    inheritContainedBg: '#DFE3E8',
    inheritContainedHoverBg: '#f5f5f5',
  },
  Chip: {
    defaultBorder: '#C4CDD5',
    defaultAvatarColor: '#454F5B',
    defaultIconColor: '#454F5B',
  },
  FilledInput: {
    bg: 'rgba(0, 0, 0, 0.06)',
    hoverBg: 'rgba(0, 0, 0, 0.09)',
    disabledBg: 'rgba(0, 0, 0, 0.12)',
  },
  LinearProgress: {
    primaryBg: 'rgb(160, 211, 248)',
    secondaryBg: 'rgb(212, 177, 255)',
    errorBg: 'rgb(255, 190, 176)',
    infoBg: 'rgb(158, 228, 240)',
    successBg: 'rgb(171, 232, 193)',
    warningBg: 'rgb(255, 223, 158)',
  },
  Skeleton: {
    bg: 'rgba(28, 37, 46, 0.11)',
  },
  Slider: {
    primaryTrack: 'rgb(160, 211, 248)',
    secondaryTrack: 'rgb(212, 177, 255)',
    errorTrack: 'rgb(255, 190, 176)',
    infoTrack: 'rgb(158, 228, 240)',
    successTrack: 'rgb(171, 232, 193)',
    warningTrack: 'rgb(255, 223, 158)',
  },
  SnackbarContent: {
    bg: 'rgb(50, 50, 50)',
    color: '#fff',
  },
  SpeedDialAction: {
    fabHoverBg: 'rgb(216, 216, 216)',
  },
  StepConnector: {
    border: '#C4CDD5',
  },
  StepContent: {
    border: '#C4CDD5',
  },
  Switch: {
    defaultColor: '#FFFFFF',
    defaultDisabledColor: '#F9FAFB',
    primaryDisabledColor: 'rgb(160, 211, 248)',
    secondaryDisabledColor: 'rgb(212, 177, 255)',
    errorDisabledColor: 'rgb(255, 190, 176)',
    infoDisabledColor: 'rgb(158, 228, 240)',
    successDisabledColor: 'rgb(171, 232, 193)',
    warningDisabledColor: 'rgb(255, 223, 158)',
  },
  TableCell: {
    border: 'rgba(241, 241, 241, 1)',
  },
  Tooltip: {
    bg: 'rgba(69, 79, 91, 0.92)',
  },
};

export const opacityLight = {
  inputPlaceholder: 0.42,
  inputUnderline: 0.42,
  switchTrackDisabled: 0.12,
  switchTrack: 0.38,
};

export function getLightPalette(): PaletteOptions {
  return lightPalette;
}
