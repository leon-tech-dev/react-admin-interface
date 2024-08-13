import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PaletteMode } from '@mui/material';
import localforage from 'localforage';

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ThemeState {
  mode: ThemeMode;
  systemPreference: PaletteMode;
}

const initialState: ThemeState = {
  mode: 'system',
  systemPreference: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localforage.setItem('themeMode', action.payload);
    },
    setSystemPreference: (state, action: PayloadAction<PaletteMode>) => {
      state.systemPreference = action.payload;
    },
  },
});

export const { setMode, setSystemPreference } = themeSlice.actions;

export default themeSlice.reducer;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const initializeTheme = () => async (dispatch: any) => {
  const savedMode = await localforage.getItem<ThemeMode>('themeMode');
  if (savedMode) {
    dispatch(setMode(savedMode));
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  dispatch(setSystemPreference(mediaQuery.matches ? 'dark' : 'light'));

  mediaQuery.addEventListener('change', (e) => {
    dispatch(setSystemPreference(e.matches ? 'dark' : 'light'));
  });
};
