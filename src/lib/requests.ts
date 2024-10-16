import { fetcher } from '@/lib/fetch';

export const getOrders = async (supplierId: string, page: string | number) =>
  await fetcher(
    `/order/bo/list?${
      supplierId ? `supplierId=${supplierId}&` : ''
    }page=${page}&limit=10`
  );

export const getProducts = async (
  supplierId?: string,
  page?: string | number,
  id?: string,
  sku?: string,
  name?: string,
  brand?: string,
  barCode?: string
) =>
  await fetcher(
    `/product/dashboard/list?${supplierId ? `customerId=${supplierId}&` : ''}${
      brand ? `brands=${brand}&` : ''
    }${name ? `name=${name}&` : ''}${sku ? `sku=${sku}&` : ''}${
      id ? `ids=${id}&` : ''
    }${barCode ? `barCode=${barCode}&` : ''}page=${page}&limit=10`
  );

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
