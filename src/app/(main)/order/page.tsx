import { getCookie } from '@/app/actions/cookies';
import OrderBoard from '@/components/order/OrderBoard';
import { getOrders } from '@/lib/requests';
import { convertObjectToParam } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface OrderPageProps {
  searchParams: {
    page: string;
    orderNo: string;
  };
}

const OrderPage: FunctionComponent<OrderPageProps> = async ({
  searchParams
}) => {
  const supplier = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const currentParams = convertObjectToParam({
    ...searchParams,
    supplierId: supplierId
  });

  const ordersData = getOrders(currentParams);

  const [orders] = await Promise.all([ordersData]);

  return (
    <OrderBoard
      currentPage={orders?.currentPage}
      totalPage={orders?.totalPages}
      orders={orders?.data ?? []}
    />
  );
};

export default OrderPage;
