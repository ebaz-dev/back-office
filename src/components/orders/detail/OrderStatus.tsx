'use client';

import { replaceText, statusColorMap, tr } from '@/lib/utils';
import { IOrder } from '@/types';
import { Chip, Select, SelectItem } from '@nextui-org/react';
import moment from 'moment';
import { FunctionComponent } from 'react';

interface OrderStatusProps {
  order: IOrder;
}

const OrderStatus: FunctionComponent<OrderStatusProps> = ({ order }) => {
  return (
    <form className='flex gap-4 items-center w-full'>
      <div>
        <p className='font-semibold'>Order No: {order.orderNo}</p>
        <p className='text-xs'>
          {moment(order.createdAt).format('ddd, MMMM D, YYYY')}
        </p>
      </div>

      <Chip
        color={statusColorMap[order.status]}
        size='sm'
        className='text-white capitalize'
        variant='shadow'
      >
        {replaceText(order.status)}
      </Chip>

      <Select
        aria-label='status'
        items={[{ value: '1', label: 'test' }]}
        className='max-w-xs ml-auto'
        variant='bordered'
        labelPlacement='outside'
        placeholder={tr('Төлөв өөрчлөх')}
        classNames={{
          label: 'text-xs'
        }}
      >
        {option => <SelectItem key={option.value}>{option.label}</SelectItem>}
      </Select>
    </form>
  );
};

export default OrderStatus;
