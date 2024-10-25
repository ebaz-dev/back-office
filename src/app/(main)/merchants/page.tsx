import { getCookie } from '@/app/actions/cookies';
import MerchantBoard from '@/components/merchants/MerchantBoard';
import { getCustomers } from '@/lib/requests';
import { convertObjectToParam } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface MerchantsPageProps {
  searchParams: {
    page: string;
  };
}

const MerchantsPage: FunctionComponent<MerchantsPageProps> = async ({
  searchParams
}) => {
  const supplier = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const currentParams = convertObjectToParam({
    ...searchParams,
    type: 'merchant',
    supplierId: supplierId
  });

  const merchantsData = getCustomers(currentParams);

  const [merchants] = await Promise.all([merchantsData]);

  return (
    <MerchantBoard
      merchants={merchants?.data ?? []}
      currentPage={merchants?.currentPage}
      totalPage={merchants?.totalPages}
    />
  );
};

export default MerchantsPage;
