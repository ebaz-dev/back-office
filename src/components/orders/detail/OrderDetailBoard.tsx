import { IOrder } from '@/types';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider
} from '@nextui-org/react';
import { FunctionComponent } from 'react';
import OrderStatus from '@/components/orders/detail/OrderStatus';
import OrderProductsTable from '@/components/orders/detail/OrderProductsTable';

interface OrderDetailBoardProps {
  order: IOrder;
}

const OrderDetailBoard: FunctionComponent<OrderDetailBoardProps> = ({
  order
}) => {
  return (
    <Card>
      <CardHeader>
        <OrderStatus order={order} />
      </CardHeader>

      <Divider />

      <CardBody>
        <OrderProductsTable products={order.products} />
      </CardBody>

      <Divider />

      <CardFooter></CardFooter>
    </Card>
  );
};

export default OrderDetailBoard;
