import OrderDetailBoard from '@/components/orders/detail/OrderDetailBoard';
import { getOrder } from '@/services/orders.service';
import { IOrder } from '@/types';
import { FunctionComponent } from 'react';

interface OrderDetailPageProps {
  params: { id: number };
}

const OrderDetailPage: FunctionComponent<OrderDetailPageProps> = async ({
  params
}) => {
  const order = await getOrder<IOrder>(params.id);

  return <OrderDetailBoard order={order} />;
};

export default OrderDetailPage;
