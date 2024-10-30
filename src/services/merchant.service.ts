import dataProvider from "@/services/data-provider.service";
import type { SearchParamsType } from "@/types/common.types";
import type { ApiResponse } from "@/types/data-provider.types";
import { getCookie } from "@/app/actions/cookies";

export async function getMerchants(
  searchParams: SearchParamsType
): Promise<ApiResponse<any[]>> {
  const supplier = await getCookie("supplier");
  const supplierId = supplier ? JSON.parse(supplier).id : "";

  const params = {
    ...searchParams,
    supplierId,
  };

  return dataProvider.getList<any[]>("/customer/bo/list", params);
}
