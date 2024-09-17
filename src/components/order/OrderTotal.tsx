import { formatUnit } from '@/lib/utils';
import { Chip } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface OrderTotalProps {}

const totalLabels = [
  'Нийт захиалгын тоо',
  'Нийт мөнгөн дүн',
  'Нийт төлбөр төлөлт',
  'Хүлээгдэж буй',
  'Баталгаажсан',
  'Хүргэгдсэн',
  'Цуцлагдсан',
  'Хүргэлтийн төлбөр'
];

const OrderTotal: FunctionComponent<OrderTotalProps> = () => {
  return (
    <div className='flex gap-2 flex-wrap'>
      {totalLabels.map((label: string, index: number) => {
        return (
          <div
            key={index}
            className='flex border p-2 items-center gap-2 rounded-tr-lg rounded-bl-lg'
          >
            <Chip color='primary' className='text-xs' size='sm'>
              {formatUnit(1000, 'ш')}
            </Chip>

            <div>
              <p className='text-xs'>{label}:</p>
              <b>{formatUnit(1000000000, '₮')}</b>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTotal;
