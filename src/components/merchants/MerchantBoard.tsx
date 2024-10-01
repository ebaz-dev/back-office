import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { CustomerColumns } from '@/lib/columns';
import { ICustomer } from '@/lib/types';

interface MerchantBoardProps {
  merchants: ICustomer[];
  totalPage: number;
  currentPage: number;
}

const MerchantBoard: FunctionComponent<MerchantBoardProps> = props => {
  const { merchants, totalPage, currentPage } = props;

  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          data={merchants}
          columns={CustomerColumns}
          totalPage={totalPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default MerchantBoard;
