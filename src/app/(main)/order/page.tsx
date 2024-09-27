import { getCookie } from '@/app/actions/cookies';
import OrderBoard from '@/components/order/OrderBoard';
import { getCustomers, getOrders } from '@/lib/requests';
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
  const supplierData = getCustomers('merchant');

  const [orders, suppliers] = await Promise.all([ordersData, supplierData]);

  return (
    <OrderBoard
      currentPage={orders?.currentPage}
      totalPage={orders?.totalPages}
      orders={orders.data ?? []}
      suppliers={suppliers?.data || []}
      supplierId={supplierId}
    />
  );
};

export default OrderPage;
