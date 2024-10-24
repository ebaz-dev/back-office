import { IOrder } from '@/lib/types';
import { FunctionComponent } from 'react';

interface OrderDetailProps {
  order: IOrder;
}

const OrderDetail: FunctionComponent<OrderDetailProps> = ({ order }) => {
  return <div></div>;
};

export default OrderDetail;
