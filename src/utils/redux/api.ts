import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Notify } from "../resources/toast";

interface ErrorResponse {
  details?: { field?: string; message?: string }[];
  error?: string;
  message?: string;
}

const handleErrorResponse = (body: ErrorResponse | undefined) => {
  if (body?.details?.length !== 0) {
    body?.details?.forEach?.((res) => {
      Notify().showErrorNotification(`${res?.field}: ${res?.message}`);
    });
  }

  Notify().showErrorNotification(
    body?.error || body?.message || "An error occurred"
  );
};

export const api = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASEURL,
  prepareHeaders: (headers) => {
    return headers;
  },
  validateStatus(response, body) {
    console.log({ response, body });
    if (response?.status) {
      if (response.status >= 200 && response.status < 300) {
        return true;
      } else {
        handleErrorResponse(body as ErrorResponse);
        return false;
      }
    }
    return false;
  },
});
