import dataProvider from '@/services/data-provider.service';
import type { IBrand, IProduct, OrderSearchParams } from '@/types';
import type { ApiResponse } from '@/types/data-provider.types';
import { getCookie } from '@/app/actions/cookies';

export async function getProducts(searchParams: OrderSearchParams): Promise<ApiResponse<IProduct[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const params = {
    ...searchParams,
    supplierId,
  };

  return dataProvider.getList<IProduct[]>('/product/dashboard/list', params);
}

export async function getProductBrands(): Promise<ApiResponse<IBrand[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  return dataProvider.getList<IBrand[]>('/product/brands', { supplierId });
}

export async function getProduct<IProduct>(id: number) {
  const params = {
    ids: [id]
  };

  const res = await dataProvider.getList<IProduct[]>('/product/dashboard/list', params);
  return res.data[0];
}
