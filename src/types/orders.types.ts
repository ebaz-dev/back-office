import { ICustomer, IProduct } from '@/types';
import { SearchParamsType } from '@/types';

export interface OrderSearchParams extends SearchParamsType {
  orderNo?: string;
}

export interface IOrder {
  orderNo: string;
  status: string;
  products: IProduct[];
  giftProducts: [];
  deliveryDate: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  id: string;
  supplier: ICustomer;
  merchant: ICustomer;
  totalPrice: number;
  user: { phoneNumber: string; id: string };
}
