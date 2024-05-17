/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";

import { api } from "../api";

export const financesApi = createApi({
  baseQuery: api,
  reducerPath: "financesApi",
  endpoints: (builder) => ({
    getSubscriptions: builder.query({
      query: () => ({
        url: "Admin/subscriptions",
        method: "GET",
      }),
    }),
    getTransactions: builder.query({
      query: () => ({
        url: "Admin/payments",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTransactionsQuery, useGetSubscriptionsQuery } = financesApi;
