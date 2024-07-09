import { createApi } from "@reduxjs/toolkit/query/react";

import { api } from "../api";
import { TNumberOperations } from "@/app/dashboard/pages/NumbersOps";

export const operationsApi = createApi({
  baseQuery: api,
  reducerPath: "operationsApi",
  tagTypes: ["CreateSim", "FetchSingleSimData", "FetchAllSimData"],
  endpoints: (builder) => ({
    fetchPendingSims: builder.query({
      query: (params) => ({
        url: "Admin/sims",
        method: "GET",
        params: params,
      }),
      providesTags: ["FetchAllSimData"],
    }),
    fetchPendingSimsDetails: builder.query({
      query: (params) => ({
        url: `Admin/sims/${params.id}`,
        method: "GET",
      }),
      providesTags: ["FetchSingleSimData"],
    }),
    createSim: builder.mutation({
      query: (payload: TNumberOperations) => ({
        url: "sims",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["FetchSingleSimData", "FetchAllSimData"],
    }),
  }),
});

export const {
  useCreateSimMutation,
  useFetchPendingSimsQuery,
  useFetchPendingSimsDetailsQuery,
} = operationsApi;
