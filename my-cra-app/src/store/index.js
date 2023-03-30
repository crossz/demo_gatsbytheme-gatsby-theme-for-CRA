/**
 * References:
 * - https://github.com/reduxjs/redux-toolkit/blob/2afd0f9b4cbb1aa33e44e0952cd9c2cccc7714d3/docs/usage/usage-guide.md
 */
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./slices";

const createStore = (preloadedState) =>
  configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
    devTools: process.env.NODE_ENV !== "production",
  });

export const store = createStore();
