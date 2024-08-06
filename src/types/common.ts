import { ReactNode } from 'react';

import { AxiosError } from 'axios';
export interface LayoutType {
  children: ReactNode;
}

export type GenderInt = 'Male' | 'Female';

export interface RequestResponseInt {
  success: boolean;
  data: Record<string, any>;
  auth: Record<string, any>;
  message: string;
}

export type AxiosErrorInt = AxiosError;

export interface ErrorResponseInt {
  message: string;
  statusCode: number;
}

export interface RequestInt {
  url: string;
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  token?: boolean;
  headers?: any;
  isRelativeUrl?: boolean;
}

export interface PostRequestInt extends RequestInt {
  data: Record<string, any>;
}

export interface GetRequestInt extends RequestInt {
  data?: Record<string, any>;
}

export interface FormOption<T = string | number> {
  label: string;
  value: T;
  id?: number;
  isDisabled?: boolean;
}
export interface PhoneNumberType {
  countryCode?: string;
  localFormat?: string;
}

export interface Message {
  content: string;
  createdAt: Date;
  id: string;
}

export interface IpaginateData {
  pageNumber: number;
  pageSize: number;
  totalItemCount: number;
  hasMoreData: boolean;
}
export interface IGetPaginatedData<T = any> {
  data?: T;
  paginationData: IpaginateData;
}

export type blockType<DataType = any> = {
  loading: boolean;
  error: string;
  success: boolean;
  data?: DataType;
  paginationData?: IpaginateData;
};

export const block = {
  loading: false,
  error: '',
  success: false,
  data: undefined,
  meta: undefined,
};

export interface IMeta {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextPage: number;
}

export interface IPaginateParams {
  id?: number | string;
  name?: string;
  InterestIds?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  showOnlyJoinedCommunities?: boolean;
}

export type ResponseData<DataType = any> = {
  success: boolean;
  message: string;
  data: DataType;
  paginationData: IpaginateData;
};