import { getOrders } from '@/services/orders.service';
import OrdersBoard from '@/components/orders/OrdersBoard';
import { OrderSearchParams } from '@/types';
import { FunctionComponent } from 'react';

interface OrderPageProps {
  searchParams: OrderSearchParams;
}

const OrderPage: FunctionComponent<OrderPageProps> = async ({
  searchParams
}) => {
  const orders = await getOrders(searchParams);

  return (
    <OrdersBoard
      orders={orders.data}
      currentPage={orders.currentPage}
      totalPage={orders.totalPages}
    />
  );
};

export default OrderPage;
