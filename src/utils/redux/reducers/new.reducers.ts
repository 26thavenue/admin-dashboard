import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

enum FileType {
    Image = 1,
    Gif = 2,
    Video = 3,
}


type Media = {
    url:string;
    fileName:string;
    fileType:FileType
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://devapi.japa.run/api/v1/' }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: (credentials) => ({
        url: 'Admin/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: credentials,
      }),
    }),
    uploadMedia: builder.mutation({
      query: ({ commentId, message, media }: { commentId: string, message: string, media: Media }) => ({
        url: `Comment/${commentId}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: { message, media },
      }),
    }),
  }),
});

export const { useAdminLoginMutation, useUploadMediaMutation } = api;