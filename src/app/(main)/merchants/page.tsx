import { getCookie } from '@/app/actions/cookies';
import MerchantBoard from '@/components/merchants/MerchantBoard';
import { getCustomers } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface MerchantsPageProps {
  searchParams: {
    page: string;
  };
}

const MerchantsPage: FunctionComponent<MerchantsPageProps> = async ({
  searchParams: { page }
}) => {
  const supplier: any = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier)._id : '';

  const merchantsData = getCustomers('merchant', supplierId, page);

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
