import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { tr } from '@/lib/utils';
import OrderTotal from '@/components/order/OrderTotal';
import { OrderColumns } from '@/lib/columns';

interface OrderBoardProps {}

const OrderBoard: FunctionComponent<OrderBoardProps> = () => {
  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable columns={OrderColumns} data={[]} />
      </div>

      <Card>
        <CardBody>
          <OrderTotal />
        </CardBody>
      </Card>
    </div>
  );
};

export default OrderBoard;
