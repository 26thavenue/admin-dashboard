import { createApi } from "@reduxjs/toolkit/query/react";
import { api } from "../api";

export const authApi = createApi({
  baseQuery: api,
  reducerPath: "authApi",
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "https://devapi.japa.run/api/v1/Admin/login",
        method: "POST",
        body: payload,
      }),
    }),
    login: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    changePassword: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    getStarted: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    resetPassword: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    getPasswordOTP: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    resendPasswordOTP: builder.mutation({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
    logout: builder.query({
      query: (payload: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useChangePasswordMutation,
  useGetStartedMutation,
  useResetPasswordMutation,
  useGetPasswordOTPMutation,
  useResendPasswordOTPMutation,
  useLogoutQuery,
} = authApi;
