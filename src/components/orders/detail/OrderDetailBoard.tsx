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
import OrderMerchantInfo from '@/components/orders/detail/OrderMerchantInfo';
import OrderInfo from '@/components/orders/detail/OrderInfo';
import OrderPaymentInfo from '@/components/orders/detail/OrderPaymentInfo';

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

      <CardBody className='gap-4'>
        <div className='grid grid-cols-3 gap-4'>
          <OrderMerchantInfo merchant={order.merchant} />

          <OrderInfo order={order} />

          <OrderPaymentInfo order={order} />
        </div>

        <OrderProductsTable products={order.products} />
      </CardBody>
    </Card>
  );
};

export default OrderDetailBoard;
