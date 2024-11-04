import { IOrder, IProduct } from '@/types';
import { FunctionComponent } from 'react';
import OrderedProduct from '@/components/order/OrderedProduct';

interface OrderDetailProps {
  order: IOrder;
}

const OrderDetail: FunctionComponent<OrderDetailProps> = ({ order }) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      {order.products.map((product: IProduct, index: number) => {
        return <OrderedProduct key={index} product={product} />;
      })}
    </div>
  );
};

export default OrderDetail;
