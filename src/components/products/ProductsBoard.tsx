import { FunctionComponent } from 'react';
import { IBrand, IProduct } from '@/types';
import ProductsTable from '@/components/products/ProductsTable';

interface ProductsBoardProps {
  brands: IBrand[];
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  return (
    <div className='h-full'>
      <ProductsTable {...props} />
    </div>
  );
};

export default ProductsBoard;
