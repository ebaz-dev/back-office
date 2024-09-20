import { FunctionComponent } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { ProductsColumns } from '@/lib/columns';
import ProductsReg from '@/components/products/ProductsReg';
import { IProduct } from '@/lib/types';

interface ProductsBoardProps {
  products: IProduct[];
  totalPages: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = ({
  products,
  totalPages,
  currentPage
}) => {
  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={ProductsColumns}
          data={products}
          totalPages={totalPages}
          currentPage={currentPage}
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
