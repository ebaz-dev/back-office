import { FunctionComponent } from 'react';
import { IOrder } from '@/types/orders.types';
import OrderTable from '@/components/orders/OrderTable';
import OrderFilterForm from '@/components/orders/OrderFilterForm';
import { Card, CardBody } from '@nextui-org/react';

interface OrderBoardProps {
  orders: IOrder[];
  currentPage: number;
  totalPage: number;
}

const OrderBoard: FunctionComponent<OrderBoardProps> = props => {
  return (
    <div className='h-full flex flex-col gap-4'>
      <Card>
        <CardBody>
          <OrderFilterForm />
        </CardBody>
      </Card>

      <OrderTable {...props} />
    </div>
  );
};

export default OrderBoard;
