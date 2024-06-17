import { createApi } from "@reduxjs/toolkit/query/react";

import { api } from "../api";
import { TNumberOperations } from "@/app/dashboard/pages/NumbersOps";

export const operationsApi = createApi({
  baseQuery: api,
  reducerPath: "operationsApi",
  endpoints: (builder) => ({
    createSim: builder.mutation({
      query: (payload: TNumberOperations) => ({
        url: "sims",
        method: "POST",
        body: payload,
      }),
    }),
    fetchPendingSims: builder.query({
      query: (params) => ({
        url: "Admin/sims",
        method: "GET",
        params: params,
      }),
    }),
  }),
});

export const { useCreateSimMutation, useFetchPendingSimsQuery } = operationsApi;
