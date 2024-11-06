import { FunctionComponent } from 'react';
import { IOrder } from '@/types';
import OrderTable from '@/components/orders/OrdersTable';
import OrderFilterForm from '@/components/orders/OrdersFilterForm';
import { Card, CardBody } from '@nextui-org/react';

interface OrdersBoardProps {
  orders: IOrder[];
  currentPage: number;
  totalPage: number;
}

const OrdersBoard: FunctionComponent<OrdersBoardProps> = props => {
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

export default OrdersBoard;
