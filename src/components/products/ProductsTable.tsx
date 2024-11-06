'use client';

import { ITableItemType, IProduct } from '@/types';
import { FunctionComponent, useCallback } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { getValueByPath } from '@/lib/utils';
import { PRODUCTS_COLUMNS } from '@/components/products/constants';
import CoreGroupImages from '@/components/core/CoreGroupImages';
import { Switch } from '@nextui-org/react';

interface ProductsTableProps {
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsTable: FunctionComponent<ProductsTableProps> = props => {
  const { products, totalPage, currentPage } = props;

  const renderCell = useCallback(
    (product: ITableItemType, columnKey: React.Key) => {
      const cellValue = getValueByPath(product, columnKey.toString());

      switch (columnKey) {
        case 'isActive':
          return <Switch size='sm' defaultSelected={cellValue} />;

        case 'images':
          return <CoreGroupImages images={cellValue} />;

        default:
          return <div className='line-clamp-2'>{cellValue}</div>;
      }
    },
    []
  );

  return (
    <div className='flex-1'>
      <CoreTable
        data={products}
        columns={PRODUCTS_COLUMNS}
        renderCell={renderCell}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ProductsTable;
