import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { authApi } from "./reducers/auth.reducers";
import { profileApi } from "./reducers/profile.reducers";
import { operationsApi, productApi } from "./reducers";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [operationsApi.reducerPath]: operationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      profileApi.middleware,
      productApi.middleware,
      operationsApi.middleware,
    ]),
});

setupListeners(store.dispatch);
