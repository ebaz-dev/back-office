'use client';

import { FunctionComponent, Key } from 'react';
import { useRouter } from 'next/navigation';
import { IBrand, IProduct } from '@/types/product.types';
import CoreTable from '@/components/core/CoreTable';
import ProductsFilterForm from '@/components/products/ProductsFilterForm';
import { ProductsColumns } from '@/lib/columns/products';

interface ProductsBoardProps {
  brands: IBrand[];
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  const { products, totalPage, currentPage, brands } = props;

  const router = useRouter();
  const onRowAction = async (key: Key) => {
    const product: IProduct | undefined = products.find(
      item => item.id === key
    );

    router.push(`/products/${product?.id}`);
  };

  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={ProductsColumns()}
          data={products}
          totalPage={totalPage}
          currentPage={currentPage}
          onRowAction={onRowAction}
          customTopContents={<ProductsFilterForm brands={brands} />}
        />
      </div>
    </div>
  );
};

export default ProductsBoard;
