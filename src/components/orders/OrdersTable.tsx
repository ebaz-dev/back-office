'use client';

import { IOrder, IProduct } from '@/types';
import { FunctionComponent, useCallback } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { getValueByPath, replaceText, statusColorMap } from '@/lib/utils';
import CoreGroupImages from '@/components/core/CoreGroupImages';
import { Chip } from '@nextui-org/react';
import moment from 'moment';
import { ORDER_COLUMNS } from '@/components/orders/constants';

interface OrdersTableProps {
  orders: IOrder[];
  totalPage: number;
  currentPage: number;
}

const OrdersTable: FunctionComponent<OrdersTableProps> = props => {
  const { orders, totalPage, currentPage } = props;

  const renderCell = useCallback((order: IOrder, columnKey: React.Key) => {
    const cellValue = getValueByPath(order, columnKey.toString());

    switch (columnKey) {
      case 'deliveryDate':
        return moment(cellValue).format('YYYY-MM-DD');

      case 'createdAt':
        return moment(cellValue).format('HH:MM:ss, YYYY-MM-DD');

      case 'status':
        return (
          <Chip
            color={statusColorMap[cellValue]}
            size='sm'
            className='text-white capitalize'
            variant='shadow'
          >
            {replaceText(cellValue)}
          </Chip>
        );

      case 'products':
        const images: string[] = [];

        if (order.products) {
          order.products.forEach((product: IProduct) => {
            if (product && product.images) {
              images.push(...product.images);
            }
          });
        }

        return <CoreGroupImages images={images} />;

      default:
        return cellValue;
    }
  }, []);

  return (
    <div className='flex-1'>
      <CoreTable
        data={orders}
        columns={ORDER_COLUMNS}
        renderCell={renderCell}
        totalPage={totalPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default OrdersTable;