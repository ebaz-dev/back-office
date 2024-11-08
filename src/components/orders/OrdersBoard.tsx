import { FunctionComponent } from 'react';
import { IOrder } from '@/types';
import OrderTable from '@/components/orders/OrdersTable';

interface OrdersBoardProps {
  orders: IOrder[];
  currentPage: number;
  totalPage: number;
}

const OrdersBoard: FunctionComponent<OrdersBoardProps> = props => {
  return (
    <div className='h-full flex flex-col gap-4 w-full'>
      <OrderTable {...props} />
    </div>
  );
};

export default OrdersBoard;
