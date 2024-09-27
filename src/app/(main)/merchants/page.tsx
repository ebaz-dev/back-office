import MerchantBoard from '@/components/merchants/MerchantBoard';
import { getCustomers } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface MerchantsPageProps {}

const MerchantsPage: FunctionComponent<MerchantsPageProps> = async () => {
  const merchantsData = getCustomers('merchant');

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
