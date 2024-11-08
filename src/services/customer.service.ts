/* eslint-disable @typescript-eslint/no-explicit-any */
import dataProvider from '@/services/data-provider.service';
import type { SearchParamsType } from '@/types';
import type { ApiResponse } from '@/types';
import { getCookie } from '@/app/actions/cookies';
import { IMerchant } from '@/types';

export async function getMerchants(
  searchParams: SearchParamsType
): Promise<ApiResponse<IMerchant[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const params = {
    ...searchParams,
    supplierId
  };

  return dataProvider.getList<IMerchant[]>('/customer/bo/merchant', params);
}

export async function getSuppliers(): Promise<ApiResponse<any[]>> {
  return dataProvider.getList<IMerchant[]>('/customer/bo/supplier');
}
