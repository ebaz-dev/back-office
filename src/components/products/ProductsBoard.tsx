'use client';

import { FunctionComponent, useState } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { ProductsColumns } from '@/lib/columns';
import ProductsCreate from '@/components/products/ProductsCreate';
import { IProduct } from '@/lib/types';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { tr } from '@/lib/utils';
import { getProductAction } from '@/app/actions/products';
import ProductsDetail from './ProductsDetail';
import CoreEmpty from '../core/CoreEmpty';

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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState();

  const onRowAction = async (key: any) => {
    onOpen();

    const product = await getProductAction(key);

    setSelectedProduct(product);
  };

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
              <ProductsCreate />
            </div>
          }
          onRowAction={onRowAction}
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Бүтээгдэхүүний дэлгэрэнгүй')}
              </ModalHeader>
              <ModalBody className='pb-4'>
                {selectedProduct ? (
                  <ProductsDetail product={selectedProduct} />
                ) : (
                  <CoreEmpty />
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductsBoard;
