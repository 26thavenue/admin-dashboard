/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

import { SerializedError } from "@reduxjs/toolkit";
import { api } from "../api";

interface ApiResponse<T> {
  data?: T | Record<string, string> | string;
  error?: FetchBaseQueryError | SerializedError;
  result?: T;
}

interface ApiError {
  message: string;
}

export const productApi = createApi({
  baseQuery: api,
  reducerPath: "productApi",
  endpoints: (builder) => ({
    createProducts: builder.mutation({
      query: (payload) => ({
        url: "products",
        method: "POST",
        body: payload,
      }),
    }),
    createPlans: builder.mutation({
      query: (payload) => ({
        url: "products/plan",
        method: "POST",
        body: payload,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "products",
        method: "GET",
      }),
    }),
    getWebsiteSingleProduct: builder.query({
      query: (params) => ({
        url: "products/plan",
        method: "GET",
        params: params,
      }),
    }),
    buySingleProduct: builder.mutation<ApiResponse<any>, unknown>({
      query: (params) => ({
        url: "Identity/register",
        method: "POST",
        body: params,
      }),
    }),
    verifySecret: builder.mutation<ApiError, string | undefined>({
      query: (token) => ({
        url: "Identity/register/complete",
        method: "POST",
        body: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),

    queryVerifySecret: builder.query<
      ApiResponse<{
        [key: string]: Record<string, string> | string;
      }>,
      string | undefined
    >({
      query: (token) => ({
        url: "Identity/register/complete",
        method: "POST",
        body: {},
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetWebsiteSingleProductQuery,
  useBuySingleProductMutation,
  useVerifySecretMutation,
  useQueryVerifySecretQuery,
  useCreateProductsMutation,
  useCreatePlansMutation
} = productApi;
