'use client';

import { FunctionComponent, Key } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { OrderColumns } from '@/lib/columns';
import { ICustomer, IOrder } from '@/lib/types';
import CoreSelectSupplier from '@/components/core/CoreSelectSupplier';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { tr } from '@/lib/utils';

interface OrderBoardProps {
  orders: IOrder[];
  suppliers: ICustomer[];
  supplierId: string;
  currentPage: number;
  totalPage: number;
}

const OrderBoard: FunctionComponent<OrderBoardProps> = props => {
  const { orders, suppliers, supplierId, totalPage, currentPage } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onRowAction = async (key: Key) => {
    onOpen();
  };

  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={OrderColumns}
          data={orders}
          totalPage={totalPage}
          currentPage={currentPage}
          onRowAction={onRowAction}
          customTopContents={
            <div className='flex gap-2'>
              <CoreSelectSupplier
                suppliers={suppliers}
                supplierId={supplierId}
              />
            </div>
          }
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Захиалгын дэлгэрэнгүй')}
              </ModalHeader>
              <ModalBody className='pb-4'>hello</ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderBoard;
