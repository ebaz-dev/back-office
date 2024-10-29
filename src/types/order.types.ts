import { IProduct } from "@/types/product.types";

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