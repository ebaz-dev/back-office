import { tr } from '@/lib/utils';
import { ICustomer } from '@/types';
import { UserIcon } from '@heroicons/react/24/outline';
import { Avatar, Card, CardBody } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface OrderMerchantInfoProps {
  merchant: ICustomer;
}

const OrderMerchantInfo: FunctionComponent<OrderMerchantInfoProps> = ({
  merchant
}) => {
  return (
    <Card>
      <CardBody className='flex-row gap-4'>
        <Avatar icon={<UserIcon className='w-5 h-5' />} />

        <div className='flex-1'>
          <p className='font-medium'>{tr('Харилцагчийн мэдээлэл')}</p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Дугаар')}:</span>
            <span>{merchant.customerNo}</span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Нэр')}:</span>
            <span>{merchant.name}</span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Утас')}:</span>
            <span>{merchant.phone}</span>
          </p>
          <p className='text-xs flex gap-2'>
            <span className='text-default-400'>{tr('Хаяг')}:</span>
            <span>{merchant.address}</span>
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default OrderMerchantInfo;
