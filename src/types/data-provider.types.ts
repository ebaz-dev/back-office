/* eslint-disable @typescript-eslint/no-explicit-any */

export type GetListParamsProps = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: FilterType | FilterType[];
};

export type GetListProps = {
  resource: string;
  params: GetListParamsProps;
};

export type FilterType = {
  field?: string;
  val?: string | number | string[];
};

export type GetListParamsType = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: FilterType | FilterType[];
  [key: string]: any;
};

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
};
