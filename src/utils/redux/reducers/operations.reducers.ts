/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createApi,
  //  FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";

// import { SerializedError } from "@reduxjs/toolkit";
import { api } from "../api";
import { TNumberOperations } from "@/app/dashboard/pages/NumbersOps";

// interface ApiResponse<T> {
//   data?: T | Record<string, string> | string;
//   error?: FetchBaseQueryError | SerializedError;
//   result?: T;
// }

// interface ApiError {
//   message: string;
// }

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
    
  }),
});

export const { useCreateSimMutation } = operationsApi;
