import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { CustomerColumns } from '@/lib/columns';

interface MerchantBoardProps {}

const MerchantBoard: FunctionComponent<MerchantBoardProps> = () => {
  return (
    <div className='h-full'>
      <CoreTable
        data={[]}
        columns={CustomerColumns}
        totalPages={1}
        currentPage={1}
      />
    </div>
  );
};

export default MerchantBoard;
