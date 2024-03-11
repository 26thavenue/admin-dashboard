import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../api";

export const profileApi = createApi({
  baseQuery: api,
  reducerPath: "profileApi",
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    getPhoneNumber: builder.query({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    activatePhoneNumber: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    explorePlans: builder.query({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    accountBalances: builder.query({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    getRecentOrders: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useGetProfileQuery,
  useGetPhoneNumberQuery,
  useActivatePhoneNumberMutation,
  useExplorePlansQuery,
  useAccountBalancesQuery,
  useGetRecentOrdersMutation,
} = profileApi;
