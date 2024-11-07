import dataProvider from '@/services/data-provider.service';
import { IProduct, ProductSearchParams, ApiResponse, IBrand } from '@/types';
import { getCookie } from '@/app/actions/cookies';

export async function getProducts(
  searchParams: ProductSearchParams
): Promise<ApiResponse<IProduct[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const params = {
    ...searchParams,
    customerId: supplierId
  };

  return dataProvider.getList<IProduct[]>('/product/bo', params);
}

export async function getProduct<IProduct>(id: number) {
  const res = await dataProvider.getOne<IProduct>(`/product/bo`, { id });
  return res.data;
}

export async function createProduct<IProduct>(data: IProduct) {
  const res = await dataProvider.create<IProduct>(`/product/bo`, data);
  return res.data;
}

export async function updateProduct<IProduct>(id: number, data: IProduct) {
  const res = await dataProvider.update<IProduct>(`/product/bo`, { id, data });
  return res.data;
}

export async function deleteProduct<IProduct>(id: number) {
  const res = await dataProvider.delete<IProduct>(`/product/bo`, { id });
  return res.data;
}

export async function getProductBrands(): Promise<ApiResponse<IBrand[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  return dataProvider.getList<IBrand[]>('/product/brands', { supplierId });
}
