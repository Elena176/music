import { combineReducers, configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazamCore';

export const rootReducer = combineReducers({
  [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
  player: playerReducer,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

export type RootReducerType = typeof rootReducer;
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>;
export type AppDispatchType = typeof store.dispatch;
