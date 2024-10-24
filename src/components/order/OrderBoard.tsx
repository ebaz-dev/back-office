'use client';

import { FunctionComponent, Key, useState } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { OrderColumns } from '@/lib/columns/orders';
import { IOrder } from '@/lib/types';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { tr } from '@/lib/utils';
import OrderFilterForm from '@/components/order/OrderFilterForm';
import CoreLoading from '@/components/core/CoreLoading';
import OrderDetail from '@/components/order/OrderDetail';

interface OrderBoardProps {
  orders: IOrder[];
  currentPage: number;
  totalPage: number;
}

const OrderBoard: FunctionComponent<OrderBoardProps> = props => {
  const { orders, totalPage, currentPage } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  const onRowAction = async (key: Key) => {
    onOpen();

    const order: any = orders.find(item => item.id === key);

    setSelectedOrder(order);
  };

  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={OrderColumns()}
          data={orders}
          totalPage={totalPage}
          currentPage={currentPage}
          onRowAction={onRowAction}
          customTopContents={<OrderFilterForm />}
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Захиалгын дэлгэрэнгүй')}
              </ModalHeader>
              <ModalBody className='pb-4'>
                {!selectedOrder ? (
                  <CoreLoading />
                ) : (
                  <OrderDetail order={selectedOrder} />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderBoard;
