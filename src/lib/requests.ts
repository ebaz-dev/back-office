import { getFetch } from '@/lib/fetch';

export const getOrders = async (id: string, page: string | number) =>
  await getFetch(`/order/bo/list?page=${page}&limit=10`);

export const getProducts = async (
  customerId?: string,
  page?: string | number,
  categoryId?: string,
  brandId?: string,
  name?: string,
  id?: string
) =>
  await getFetch(
    `/product/dashboard/list?${customerId ? `customerId=${customerId}&` : ''}${
      categoryId ? `categories=${categoryId}&` : ''
    }${brandId ? `brands=${brandId}&` : ''}${name ? `name=${name}&` : ''}${
      id ? `ids=${id}&` : ''
    }page=${page}&limit=10`
  );

export const getProductCategories = async () =>
  await getFetch(`/product/categories?limit=all`);

export const getCustomers = async (
  type?: string,
  customerId?: string,
  page?: string | number
) =>
  await getFetch(
    `/customer/list?${customerId ? `customerId=${customerId}&` : ''}${
      type ? `type=${type}&` : ''
    }page=${page}&limit=10`
  );
