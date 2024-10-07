'use client';

import { FunctionComponent, Key, useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { tr } from '@/lib/utils';
import { IProduct } from '@/lib/types';
import { ProductsColumns } from '@/lib/columns';
import { getProductAction } from '@/app/actions/products';
import CoreTable from '@/components/core/CoreTable';
import CoreLoading from '@/components/core/CoreLoading';
import ProductsDetail from '@/components/products/ProductsDetail';
import ProductsFilterForm from '@/components/products/ProductsFilterForm';

interface ProductsBoardProps {
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  const { products, totalPage, currentPage } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const onRowAction = async (key: Key) => {
    onOpen();

    const product = await getProductAction(key.toString());

    setSelectedProduct(product);
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
          customTopContents={<ProductsFilterForm />}
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Бүтээгдэхүүний дэлгэрэнгүй')}
              </ModalHeader>
              <ModalBody className='pb-4'>
                {!selectedProduct ? (
                  <CoreLoading />
                ) : (
                  <ProductsDetail product={selectedProduct} />
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
