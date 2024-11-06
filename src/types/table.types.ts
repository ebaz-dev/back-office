import { InputProps } from '@nextui-org/react';

export interface IColumn {
  uid: string;
  label: string;
}

export interface IOption {
  value: string | number | boolean;
  label: string;
}
