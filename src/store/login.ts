import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  isAuthenticated: boolean;
  user: string | null;
  permissions: string[];
}

const initialState: LoginState = {
  isAuthenticated: false,
  user: null,
  permissions: [],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<LoginState>) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.permissions = action.payload.permissions;
    },
    login: (state, action: PayloadAction<{ username: string; permissions: string[] }>) => {
      state.isAuthenticated = true;
      state.user = action.payload.username;
      state.permissions = action.payload.permissions;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.permissions = [];
    },
    updatePermissions: (state, action: PayloadAction<string[]>) => {
      state.permissions = action.payload;
    },
  },
});

export const { setUserInfo, login, logout, updatePermissions } = loginSlice.actions;

export default loginSlice.reducer;
