import { IOrder, IProduct } from '@/lib/types';
import { FunctionComponent } from 'react';

interface OrderDetailProps {
  order: IOrder;
}

const OrderDetail: FunctionComponent<OrderDetailProps> = ({ order }) => {
  return (
    <div>
      {order.products.map((product: IProduct, index: number) => {
        return <div key={index}>{product.name}</div>;
      })}
    </div>
  );
};

export default OrderDetail;
