import { configureStore } from '@reduxjs/toolkit';
import loginReducer, { setUserInfo } from './slices/loginSlice';
import themeReducer from './slices/themeSlice';
import localforage from 'localforage';

localforage.config({
  name: 'reactAdmin',
  storeName: 'reactAdminStore',
});

export const store = configureStore({
  reducer: {
    login: loginReducer,
    theme: themeReducer,
  },
});

export const initializeStore = async () => {
  try {
    const persistedState = await localforage.getItem('userInfo');
    if (persistedState) {
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      store.dispatch(setUserInfo(persistedState as any));
    }
  } catch (error) {
    console.error('Failed to load persisted state:', error);
  }
};

store.subscribe(() => {
  const state = store.getState();
  const loginState = state.login;
  const userInfo = {
    isAuthenticated: loginState.isAuthenticated,
    user: loginState.user,
    permissions: loginState.permissions,
  };
  localforage.setItem('userInfo', userInfo);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
