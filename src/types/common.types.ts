import { FilterType } from "./data-provider.types";

export interface SearchParamsType {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: string;
  filter?: FilterType | FilterType[];
}
