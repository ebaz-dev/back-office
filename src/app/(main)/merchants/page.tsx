import List from "@/components/core/List";
import { MERCHANT_COLUMNS } from "@/constants/columns/merchant";
import { SearchParamsType } from "@/types/common.types";
import { getMerchants } from "@/services/merchant.service";

interface MerchantListProps {
  searchParams: SearchParamsType;
}

export default async function MerchantList({
  searchParams,
}: MerchantListProps) {

  const merchants = await getMerchants(searchParams);

  return (
    <List
      data={merchants?.data}
      columns={MERCHANT_COLUMNS}
      totalPages={merchants?.totalPages}
      currentPage={merchants?.currentPage}
    />
  );
}
