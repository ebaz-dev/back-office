import { IOrder, IProduct } from '@/types';

export type ITableItemType = IProduct | IOrder;

export interface IColumn {
  uid: string;
  label: string;
}
