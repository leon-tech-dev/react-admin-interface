import { PaletteOptions } from '@mui/material';

export const darkPalette: PaletteOptions = {
  mode: 'dark',
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
    primary: '#FFFFFF',
    secondary: '#919EAB',
    disabled: '#637381',
  },
  background: {
    paper: '#1C252E',
    default: '#141A21',
    neutral: '#28323D',
  },
  action: {
    active: '#919EAB',
    hover: 'rgba(145, 158, 171, 0.08)',
    selected: 'rgba(145, 158, 171, 0.16)',
    disabled: 'rgba(145, 158, 171, 0.8)',
    disabledBackground: 'rgba(145, 158, 171, 0.24)',
    focus: 'rgba(145, 158, 171, 0.24)',
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  divider: 'rgba(145, 158, 171, 0.24)',
};

export const componentColorsDark = {
  Alert: {
    errorColor: 'rgb(255, 221, 205)',
    infoColor: 'rgb(191, 250, 250)',
    successColor: 'rgb(200, 247, 208)',
    warningColor: 'rgb(255, 238, 193)',
    errorFilledBg: '#B71D18',
    infoFilledBg: '#006C9C',
    successFilledBg: '#118D57',
    warningFilledBg: '#B76E00',
    errorFilledColor: '#fff',
    infoFilledColor: '#fff',
    successFilledColor: '#fff',
    warningFilledColor: '#fff',
    errorStandardBg: 'rgb(25, 17, 12)',
    infoStandardBg: 'rgb(9, 24, 24)',
    successStandardBg: 'rgb(11, 23, 13)',
    warningStandardBg: 'rgb(25, 21, 10)',
    errorIconColor: '#FF5630',
    infoIconColor: '#00B8D9',
    successIconColor: '#22C55E',
    warningIconColor: '#FFAB00',
  },
  AppBar: {
    defaultBg: '#141A21',
    darkBg: '#1C252E',
    darkColor: '#FFFFFF',
  },
  Avatar: {
    defaultBg: '#637381',
  },
  Button: {
    inheritContainedBg: '#1C252E',
    inheritContainedHoverBg: '#454F5B',
  },
  Chip: {
    defaultBorder: '#454F5B',
    defaultAvatarColor: '#DFE3E8',
    defaultIconColor: '#DFE3E8',
  },
  FilledInput: {
    bg: 'rgba(255, 255, 255, 0.09)',
    hoverBg: 'rgba(255, 255, 255, 0.13)',
    disabledBg: 'rgba(255, 255, 255, 0.12)',
  },
  LinearProgress: {
    primaryBg: 'rgb(3, 70, 119)',
    secondaryBg: 'rgb(71, 25, 127)',
    errorBg: 'rgb(127, 43, 24)',
    infoBg: 'rgb(0, 92, 108)',
    successBg: 'rgb(17, 98, 47)',
    warningBg: 'rgb(127, 85, 0)',
  },
  Skeleton: {
    bg: 'rgba(255, 255, 255, 0.13)',
  },
  Slider: {
    primaryTrack: 'rgb(3, 70, 119)',
    secondaryTrack: 'rgb(71, 25, 127)',
    errorTrack: 'rgb(127, 43, 24)',
    infoTrack: 'rgb(0, 92, 108)',
    successTrack: 'rgb(17, 98, 47)',
    warningTrack: 'rgb(127, 85, 0)',
  },
  SnackbarContent: {
    bg: 'rgb(250, 250, 250)',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  SpeedDialAction: {
    fabHoverBg: 'rgb(62, 69, 77)',
  },
  StepConnector: {
    border: '#637381',
  },
  StepContent: {
    border: '#637381',
  },
  Switch: {
    defaultColor: '#DFE3E8',
    defaultDisabledColor: '#637381',
    primaryDisabledColor: 'rgb(3, 63, 107)',
    secondaryDisabledColor: 'rgb(63, 22, 114)',
    errorDisabledColor: 'rgb(114, 38, 21)',
    infoDisabledColor: 'rgb(0, 82, 97)',
    successDisabledColor: 'rgb(15, 88, 42)',
    warningDisabledColor: 'rgb(114, 76, 0)',
  },
  TableCell: {
    border: 'rgba(46, 50, 54, 1)',
  },
  Tooltip: {
    bg: 'rgba(69, 79, 91, 0.92)',
  },
};

export const opacityDark = {
  inputPlaceholder: 0.5,
  inputUnderline: 0.7,
  switchTrackDisabled: 0.2,
  switchTrack: 0.3,
};

export function getDarkPalette(): PaletteOptions {
  return darkPalette;
}
