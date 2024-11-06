import { getOrders } from '@/services/orders.service';
import OrderBoard from '@/components/orders/OrderBoard';
import { OrderSearchParams } from '@/types/orders.types';
import { FunctionComponent } from 'react';

interface OrderPageProps {
  searchParams: OrderSearchParams;
}

const OrderPage: FunctionComponent<OrderPageProps> = async ({
  searchParams
}) => {
  const { page } = searchParams;

  const orders = await getOrders(searchParams);

  return (
    <OrderBoard
      orders={orders.data}
      currentPage={Number(page) || 1}
      totalPage={orders?.totalPages || 0}
    />
  );
};

export default OrderPage;
