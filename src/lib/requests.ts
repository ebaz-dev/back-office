import { getFetch } from '@/lib/fetch';

export const getOrders = async (id: string, page: string | number) =>
  await getFetch(`/order/list?merchantId=${id}&page=${page}&limit=10`);

export const getProducts = async (id: string, page: string | number) =>
  await getFetch(`/product/list?customerId=${id}&page=${page}&limit=10`);

export const getCustomers = async (name?: string) =>
  await getFetch(`/customer/list?name=${name}`);
