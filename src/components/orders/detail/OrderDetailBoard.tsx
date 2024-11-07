import { replaceText, statusColorMap, tr } from '@/lib/utils';
import { IOrder } from '@/types';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider
} from '@nextui-org/react';
import moment from 'moment';
import { FunctionComponent } from 'react';
import OrderStatus from './OrderStatus';
import OrderProductsTable from './OrderProductsTable';

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
