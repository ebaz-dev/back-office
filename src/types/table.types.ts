import { InputProps } from "@nextui-org/react";

export interface IColumn {
  uid: string;
  name: string;
  label: string;
  description?: string;
  defaultValue?: string | number;
  fieldType?: string;
  placeholder?: string;
  options?: IOption[];
  isFilterable?: boolean;
  isCreatable?: boolean;
  isEditable?: boolean;
  allowSorting?: boolean;
  inputProps?: InputProps;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  customCell?: (customValue: any) => React.ReactNode;
}

export interface IOption {
  value: string | number | boolean;
  label: string;
}
