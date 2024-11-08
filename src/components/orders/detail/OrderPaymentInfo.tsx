import { formatUnit, tr } from '@/lib/utils';
import { IOrder } from '@/types';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import { Avatar, Card, CardBody } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface OrderPaymentInfoProps {
  order: IOrder;
}

const OrderPaymentInfo: FunctionComponent<OrderPaymentInfoProps> = ({
  order
}) => {
  return (
    <Card>
      <CardBody className='flex-row gap-4'>
        <Avatar icon={<CreditCardIcon className='w-5 h-5' />} />

        <div className='flex-1'>
          <p className='font-medium'>{tr('Төлбөрийн мэдээлэл')}</p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Төлбөрийн хэлбэр')}:</span>
            <span></span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Төлөгдөөгүй дүн')}:</span>
            <span className='text-danger'>{formatUnit(0, '₮')}</span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Төлсөн дүн')}:</span>
            <span className='text-success'>{formatUnit(0, '₮')}</span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Нийт дүн')}:</span>
            <span>{formatUnit(order.totalPrice, '₮')}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderPaymentInfo;
