import { fetcher } from '@/lib/fetch';

export const getOrders = async (currentParams: string) =>
  await fetcher(`/order/bo/list?${currentParams}&limit=10`);

export const getProducts = async (currentParams: string) =>
  await fetcher(`/product/dashboard/list?${currentParams}&limit=10`);

export const getCustomers = async (currentParams: string) =>
  await fetcher(`/customer/bo/list?${currentParams}&limit=10`);

export const getProductBrands = async (supplierId: string) =>
  await fetcher(`/product/brands?customerId=${supplierId}&limit=all`);

export const getProductCategories = async () =>
  await fetcher(`/product/categories?limit=all`);
