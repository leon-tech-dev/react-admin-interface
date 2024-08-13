import { PaletteOptions, PaletteMode } from '@mui/material';
import { getDarkPalette } from './darkPalette';
import { getLightPalette } from './lightPalette';
export function palette(mode: PaletteMode): PaletteOptions {
  return mode === 'light' ? getLightPalette() : getDarkPalette();
}
