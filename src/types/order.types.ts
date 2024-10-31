import { IProduct } from "@/types/product.types";
import { SearchParamsType } from '@/types/common.types';

export interface OrderSearchParams extends SearchParamsType {

}

export interface OrderFilterParams {
  orderNo?: string;
  orderedAt?: string;
  deliveryDate?: string;
}

export interface IOrder {
  status: string;
  supplierId: string;
  merchantId: string;
  userId: string;
  cartId: string;
  products: IProduct[];
  orderedAt: Date | string;
  deliveryDate: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  version: number;
  id: string;
}
