import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { OrderColumns } from '@/lib/columns';
import { ICustomer, IOrder } from '@/lib/types';
import CoreSelectSupplier from '@/components/core/CoreSelectSupplier';

interface OrderBoardProps {
  orders: IOrder[];
  suppliers: ICustomer[];
  supplierId: string;
  currentPage: number;
  totalPage: number;
}

const OrderBoard: FunctionComponent<OrderBoardProps> = props => {
  const { orders, suppliers, supplierId, totalPage, currentPage } = props;

  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={OrderColumns}
          data={orders}
          totalPage={totalPage}
          currentPage={currentPage}
          customTopContents={
            <div className='flex gap-2'>
              <CoreSelectSupplier
                suppliers={suppliers}
                supplierId={supplierId}
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default OrderBoard;
