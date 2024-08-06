import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ResponseData, IPaginateParams } from '@/types/common';
//TODO-CARRY TIS AWAY 

const bearerToken = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjVhMDYzYWUwLTBhNDEtNDUwNi04OTQ1LWJkZTk4YTA1NjUxZSIsInN1YiI6IjVhMDYzYWUwLTBhNDEtNDUwNi04OTQ1LWJkZTk4YTA1NjUxZSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im12cDJ0ZXN0QHlvcG1haWwuY29tIiwianRpIjoiOGE5MzA1ZDYtMjFlZC00Mzg4LTk4OTYtZmJjYjM4MGQxNjI2IiwiZXhwIjoyMDM2MjYxMTk3LCJpc3MiOiJodHRwczovL2Rldi5qYXBhLnJ1biIsImF1ZCI6Imh0dHBzOi8vZGV2LmphcGEucnVuIn0.Y7jDsNXXIERUCNlB-Savh4t5PoQKOvW0jHCtKkkerBg';

interface IAddResourceProps  {
  "title": "string",
  "description": "string",
  "resourceLink": "string",
  "imageUpload": {
    "mimeType": "string",
    "base64Content": "string"
  },
  "tags": [
    "string"
  ],
  "isPublished": true,
  "resourceType": 3,
  "interests": [
    "string"
  ]
}


export const ResourceApi = createApi({
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
    getResource: builder.query({
      query: (
        params:IPaginateParams | undefined
      ) => {
        const { pageNumber , pageSize = 10 } = params || {};
        return `Admin/resources?page=${pageNumber}&limit=${pageSize}`;
      },
    }),
    getResourceById: builder.query({
      query: (resourceId) => `Admin/resources/${resourceId}` 
    }),
    addResource: builder.mutation({
      query: (newResource:IAddResourceProps) => ({
        url: 'Admin/resources/add',
        method: 'POST',
        body: newResource,
      }),
    }),
    updateResource: builder.mutation({
      query: ({ id, ...rest }) => ({
            url: `Admin/resources/${id}`,
            method: 'PUT',
            body: rest,
        }),
    }),
    deleteResource: builder.mutation({
      query: (resourceId) => ({
        url: `Admin/resources/${resourceId}`,
        method: 'DELETE',
      }),
    }),

  }),

});

export const {
  useGetResourceQuery,
  useGetResourceByIdQuery,
  useAddResourceMutation,
  useUpdateResourceMutation,
  useDeleteResourceMutation,
} = ResourceApi;