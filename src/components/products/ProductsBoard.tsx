'use client';

import { FunctionComponent } from 'react';
import { IBrand, IProduct } from '@/types';
import { ProductsColumns } from '@/constants/columns/products';
import CoreList from '@/components/core/CoreList';

interface ProductsBoardProps {
  brands: IBrand[];
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  const { products, totalPage, currentPage, brands } = props;

  const filterOptions = {
    brandId: brands.map(brand => ({
      label: brand.name,
      value: brand.id
    }))
  };

  return (
    <CoreList
      columns={ProductsColumns()}
      data={products}
      totalPages={totalPage}
      currentPage={currentPage}
      filterOptions={filterOptions}
    />
  );
};

export default ProductsBoard;
