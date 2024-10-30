import dataProvider from '@/services/data-provider.service';
import type { IOrder, OrderSearchParams } from '@/types/order.types';
import type { ApiResponse } from '@/types/data-provider.types';
import { getCookie } from '@/app/actions/cookies';

export async function getOrders(searchParams: OrderSearchParams): Promise<ApiResponse<IOrder[]>> {
  const supplier = await getCookie('supplier');
  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const params = {
    ...searchParams,
    supplierId,
  };

  return dataProvider.getList<IOrder[]>('/order/bo/list', params);
}
