import { getOrders } from '@/services/orders.service';
import OrderBoard from '@/components/order/OrderBoard';
import { OrderSearchParams } from '@/types';

interface OrderPageProps {
  searchParams: OrderSearchParams
}

export default async function OrderPage({
  searchParams
}: OrderPageProps) {
  const page = searchParams?.page || 1;
  const orders = await getOrders(searchParams);

  return (
    <OrderBoard
      orders={orders.data}
      currentPage={page}
      totalPage={orders?.totalPages || 0}
    />
  );
}
