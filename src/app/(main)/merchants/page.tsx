import CoreList from "@/components/core/CoreList";
import { SearchParamsType } from "@/types/common.types";
import { getMerchants } from "@/services/customer.service";
import { MERCHANT_COLUMNS } from "@/constants/columns/merchant";

interface MerchantListProps {
  searchParams: SearchParamsType;
}

export default async function MerchantList({
  searchParams,
}: MerchantListProps) {
  const merchants = await getMerchants(searchParams);

  /* dummy options start */
  const filterOptions = {
    // column name
    optionTest: [
      { value: "otter", label: "Otter" },
      { value: "crocodile", label: "Crocodile" },
      { value: "elephant", label: "Elephant" },
      { value: "lion", label: "Lion" },
    ],
  };
  /* dummy options end */

  return (
    <CoreList
      data={merchants?.data}
      columns={MERCHANT_COLUMNS}
      totalPages={merchants?.totalPages}
      currentPage={merchants?.currentPage}
      filterOptions={filterOptions}
    />
  );
}
