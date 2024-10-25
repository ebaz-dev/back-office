import { IProduct } from '@/lib/types';
import { Card, CardBody, CardFooter } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import CoreImage from '@/components/core/CoreImage';
import { formatUnit } from '@/lib/utils';

interface OrderedProductProps {
  product: IProduct;
}

const OrderedProduct: FunctionComponent<OrderedProductProps> = ({
  product
}) => {
  return (
    <Card shadow='sm' isPressable onPress={() => console.log('item pressed')}>
      <CardBody className='overflow-visible p-0'>
        <div className='w-full object-cover h-[140px]'>
          <CoreImage src={product.images[0]} />
        </div>
      </CardBody>
      <CardFooter className='flex-col'>
        <p className='font-bold text-small'>{product.name}</p>
        <p className='text-default-500 ml-auto'>
          {formatUnit(product.price, '₮')}
        </p>
      </CardFooter>
    </Card>
  );
};

export default OrderedProduct;
