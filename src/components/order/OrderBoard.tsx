import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { OrderColumns } from '@/lib/columns';

interface OrderBoardProps {}

const OrderBoard: FunctionComponent<OrderBoardProps> = () => {
  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable columns={OrderColumns} data={[]} />
      </div>
    </div>
  );
};

export default OrderBoard;
