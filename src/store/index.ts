import { configureStore } from '@reduxjs/toolkit';
import { gamesApi } from './api-slices/games-slice';

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
