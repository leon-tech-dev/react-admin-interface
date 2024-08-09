import { configureStore } from '@reduxjs/toolkit';
import loginReducer, { setUserInfo } from './login';
import localforage from 'localforage';

// Configure localforage
localforage.config({
  name: 'myApp',
  storeName: 'myAppStore',
});

export const store = configureStore({
  reducer: {
    login: loginReducer,
    // Add other reducers here as needed
  },
});

// Function to initialize the store with persisted data
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

// Subscribe to store changes and save to localforage
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
