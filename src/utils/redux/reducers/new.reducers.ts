// src/utils/redux/reducers/new.reducers.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const bearerToken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVhMDYzYWUwLTBhNDEtNDUwNi04OTQ1LWJkZTk4YTA1NjUxZSIsInN1YiI6IjVhMDYzYWUwLTBhNDEtNDUwNi04OTQ1LWJkZTk4YTA1NjUxZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im12cDJ0ZXN0QHlvcG1haWwuY29tIiwianRpIjoiOGE5MzA1ZDYtMjFlZC00Mzg4LTk4OTYtZmJjYjM4MGQxNjI2IiwiZXhwIjoyMDM2MjYxMTk3LCJpc3MiOiJodHRwczovL2Rldi5qYXBhLnJ1biIsImF1ZCI6Imh0dHBzOi8vZGV2LmphcGEucnVuIn0.Y7jDsNXXIERUCNlB-Savh4t5PoQKOvW0jHCtKkkerBg';

export enum FileType {
    Image = 1,
    Gif = 2,
    Video = 3,
}

export type Media = {
    url: string;
    fileName: string;
    fileType: FileType
}

export const newApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://devapi.japa.run/api/v1/',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${bearerToken}`);
      headers.set('Content-Type', 'application/json-patch+json');
      headers.set('accept', '*/*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation({
      query: ({email, password}: { email: string, password: string}) => ({
        url: 'Admin/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: {email, password},
      }),
    }),
    uploadMedia: builder.mutation<any, { commentId: string, message: string, media: Media[] }>({
      query: ({ commentId, message, media }) => ({
        url: `Comment/21`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json-patch+json',
        },
        body: { message, media },
      }),
    }),
  }),
});

export const { useUploadMediaMutation, useAdminLoginMutation } = newApi;