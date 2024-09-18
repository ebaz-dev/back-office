import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { ProductsColumns } from '@/lib/columns';
import ProductsReg from '@/components/products/ProductsReg';

interface ProductsBoardProps {}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = () => {
  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={ProductsColumns}
          data={[]}
          customTopContents={
            <div className='flex gap-2'>
              <ProductsReg />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ProductsBoard;
