import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASEURL,
  prepareHeaders: (headers) => {
    return headers;
  },
  validateStatus: (response) => {
     return response.status > 500;
  }, 
});
