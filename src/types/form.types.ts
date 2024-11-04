import { IOption } from "@/types/table.types";

export interface IFormField {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  options?: IOption[];
}
