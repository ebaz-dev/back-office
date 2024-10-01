import { getCookie } from '@/app/actions/cookies';
import OrderBoard from '@/components/order/OrderBoard';
import { getOrders } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface OrderPageProps {
  searchParams: {
    page: string;
    customerId: string;
  };
}

const OrderPage: FunctionComponent<OrderPageProps> = async ({
  searchParams: { page = 1, customerId }
}) => {
  const supplierId = customerId || (await getCookie('supplierId')) || '';

  const ordersData = getOrders(supplierId, page);

  const [orders] = await Promise.all([ordersData]);

  return (
    <OrderBoard
      currentPage={orders?.currentPage}
      totalPage={orders?.totalPages}
      orders={orders?.data ?? []}
      supplierId={supplierId}
    />
  );
};

export default OrderPage;
