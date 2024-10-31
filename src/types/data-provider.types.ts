/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchParamsType } from '@/types/common.types';

export type FilterType = {
  field?: string;
  val?: string | number | string[];
};

export type GetListParamsType = {
  [key: string]: any;
} & SearchParamsType;

export type GetOneParamsType = {
  id: number;
};
export type UpdateParamsType = {
  data: Record<string, unknown>;
} & GetOneParamsType;

export type DeleteParamsType = {
  id: number;
};

export type ApiResponse<T> = {
  ok: boolean;
  data: T;
  status: number;
  headers: Headers;
  total: number;
  totalPages: number;
  currentPage: number;
};
