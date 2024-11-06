import { FunctionComponent } from 'react';
import { IOrder } from '@/types/order.types';
import OrderTable from '@/components/order/OrderTable';

interface OrderBoardProps {
  orders: IOrder[];
  currentPage: number;
  totalPage: number;
}

const OrderBoard: FunctionComponent<OrderBoardProps> = props => {
  return (
    <div className='h-full flex flex-col gap-4'>
      <OrderTable {...props} />
    </div>
  );
};

export default OrderBoard;
