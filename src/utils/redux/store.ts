import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { authApi } from "./reducers/auth.reducers";
import { profileApi } from "./reducers/profile.reducers";
import { operationsApi, productApi, customersApi } from "./reducers";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [operationsApi.reducerPath]: operationsApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      profileApi.middleware,
      productApi.middleware,
      operationsApi.middleware,
      customersApi.middleware,
    ]),
});

setupListeners(store.dispatch);
