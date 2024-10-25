import { fetcher } from '@/lib/fetch';

export const getOrders = async (currentParams: string) =>
  await fetcher(`/order/bo/list?${currentParams}&page=1&limit=10`);

export const getProducts = async (currentParams: string) =>
  await fetcher(`/product/dashboard/list?${currentParams}&page=1&limit=10`);

export const getProductBrands = async (supplierId: string) =>
  await fetcher(`/product/brands?customerId=${supplierId}&limit=all`);

export const getProductCategories = async () =>
  await fetcher(`/product/categories?limit=all`);

export const getCustomers = async (
  type?: string,
  customerId?: string,
  page?: string | number
) =>
  await fetcher(
    `/customer/list?${customerId ? `customerId=${customerId}&` : ''}${
      type ? `type=${type}&` : ''
    }page=${page}&limit=10`
  );
