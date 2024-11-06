import { FilterType } from '@/types';

export type SearchParamsType = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: FilterType | FilterType[];
};

export type FilterOptionsType = {
  [key: string]: { value: string; label: string }[];
};
