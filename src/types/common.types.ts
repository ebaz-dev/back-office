import { FilterType } from "@/types/data-provider.types";

export type SearchParamsType = {
  page?: number;
  limit?: number;
  sortBy?: string; // field name
  sortOrder?: string; // asc or desc
  // TODO: add filter type
  filter?: FilterType | FilterType[];
};

export type FilterOptionsType = {
  [key: string]: { value: string; label: string }[];
};
