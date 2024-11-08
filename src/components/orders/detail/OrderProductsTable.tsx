'use client';

import CoreTable from '@/components/core/CoreTable';
import { getValueByPath, tr } from '@/lib/utils';
import { IProduct, ITableItemType } from '@/types';
import { FunctionComponent, useCallback } from 'react';
import { ORDER_PRODUCTS_COLUMNS } from '@/components/orders/detail/constants';
import CoreGroupImages from '@/components/core/CoreGroupImages';

interface OrderProductsTableProps {
  products: IProduct[];
}

const OrderProductsTable: FunctionComponent<OrderProductsTableProps> = ({
  products
}) => {
  const renderCell = useCallback(
    (order: ITableItemType, columnKey: React.Key) => {
      const cellValue = getValueByPath(order, columnKey.toString());

      switch (columnKey) {
        case 'images':
          return <CoreGroupImages images={cellValue} />;

        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className='space-y-2'>
      <p className='font-medium'>{tr('Бүтээгдэхүүнүүд')}</p>

      <CoreTable
        data={products}
        columns={ORDER_PRODUCTS_COLUMNS}
        renderCell={renderCell}
        totalPage={0}
        currentPage={0}
      />
    </div>
  );
};

export default OrderProductsTable;
