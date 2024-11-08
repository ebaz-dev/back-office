'use client';

import { IOrder, IProduct, ITableItemType } from '@/types';
import { FunctionComponent, useCallback } from 'react';
import CoreTable from '@/components/core/CoreTable';
import {
  formatUnit,
  getValueByPath,
  replaceText,
  statusColorMap
} from '@/lib/utils';
import CoreGroupImages from '@/components/core/CoreGroupImages';
import { Chip } from '@nextui-org/react';
import moment from 'moment';
import { ORDER_COLUMNS } from '@/components/orders/constants';
import { changePathAction } from '@/app/actions/main';
import OrdersFilterForm from '@/components/orders/OrdersFilterForm';

interface OrdersTableProps {
  orders: IOrder[];
  totalPage: number;
  currentPage: number;
}

const OrdersTable: FunctionComponent<OrdersTableProps> = props => {
  const { orders, totalPage, currentPage } = props;

  const renderCell = useCallback(
    (order: ITableItemType, columnKey: React.Key) => {
      const cellValue = getValueByPath(order, columnKey.toString()) || '--';

      switch (columnKey) {
        case 'totalPrice':
          return formatUnit(cellValue, '₮');

        case 'deliveryDate':
          return moment(cellValue).format('YYYY-MM-DD');

        case 'createdAt':
          return (
            <div>
              <p>{moment(cellValue).format('HH:MM:ss')}</p>
              <p>{moment(cellValue).format('YYYY-MM-DD')}</p>
            </div>
          );

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

          if ('products' in order && Array.isArray(order.products)) {
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
    },
    []
  );

  return (
    <div className='flex-1'>
      <CoreTable
        data={orders}
        columns={ORDER_COLUMNS}
        renderCell={renderCell}
        totalPage={totalPage}
        currentPage={currentPage}
        onRowAction={key => changePathAction(`/orders/${key}`)}
        customTopContent={<OrdersFilterForm />}
      />
    </div>
  );
};

export default OrdersTable;
