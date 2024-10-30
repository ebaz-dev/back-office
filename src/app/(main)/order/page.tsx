import { getOrders } from "@/services/orders.service";
import OrderBoard from "@/components/order/OrderBoard";
import { SearchParamsType } from "@/types/common.types";
import { OrderFilterParams } from "@/types";

interface OrderPageProps {
  searchParams: SearchParamsType & OrderFilterParams;
}

export default async function OrderPage({ searchParams }: OrderPageProps) {
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
