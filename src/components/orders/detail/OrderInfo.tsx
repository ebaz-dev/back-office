import { tr } from '@/lib/utils';
import { IOrder } from '@/types';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Avatar, Card, CardBody } from '@nextui-org/react';
import moment from 'moment';
import { FunctionComponent } from 'react';

interface OrderInfoProps {
  order: IOrder;
}

const OrderInfo: FunctionComponent<OrderInfoProps> = ({ order }) => {
  return (
    <Card>
      <CardBody className='flex-row gap-4'>
        <Avatar icon={<ShoppingCartIcon className='w-5 h-5' />} />

        <div className='flex-1'>
          <p className='font-medium'>{tr('Захиалгын мэдээлэл')}</p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Нийлүүлэгч')}:</span>
            <span>{order.supplier.name}</span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Үүссэн огноо')}:</span>
            <span>
              {moment(order.createdAt).format('HH:MM:ss, YYYY-MM-DD')}
            </span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Сүүлд шинэчилсэн')}:</span>
            <span>
              {moment(order.updatedAt).format('HH:MM:ss, YYYY-MM-DD')}
            </span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Хүргэгдэх өдөр')}:</span>
            <span>{moment(order.deliveryDate).format('YYYY-MM-DD')}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderInfo;
