import { getCookie } from '@/app/actions/cookies';
import OrderBoard from '@/components/order/OrderBoard';
import { getOrders } from '@/lib/requests';
import { FunctionComponent } from 'react';

interface OrderPageProps {
  searchParams: {
    page: string;
  };
}

const OrderPage: FunctionComponent<OrderPageProps> = async ({
  searchParams: { page = 1 }
}) => {
  const supplier: any = await getCookie('supplier');

  const supplierId = supplier ? JSON.parse(supplier).id : '';

  const ordersData = getOrders(supplierId, page);

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
