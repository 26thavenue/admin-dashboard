/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";

import { api } from "../api";

export const customersApi = createApi({
  baseQuery: api,
  reducerPath: "customersApi",
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => ({
        url: "Admin/users",
        method: "GET",
        params: {
          page: 1,
          pageSize: 10000,
        }
      }),
    }),
  }),
});

export const { useGetCustomersQuery } = customersApi;
