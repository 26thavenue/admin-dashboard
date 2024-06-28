import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import {
  operationsApi,
  productApi,
  customersApi,
  financesApi,
  authApi,
  profileApi,
} from "./reducers";
import { OperationsSlice } from "./slices";

export const store = configureStore({
  reducer: {
    operations: OperationsSlice,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [operationsApi.reducerPath]: operationsApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [financesApi.reducerPath]: financesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      profileApi.middleware,
      productApi.middleware,
      operationsApi.middleware,
      customersApi.middleware,
      financesApi.middleware,
    ]),
});

setupListeners(store.dispatch);
