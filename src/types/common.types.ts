import { FilterType } from '@/types/data-provider.types';

export type SearchParamsType = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: FilterType | FilterType[];
}
