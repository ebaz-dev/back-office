'use client';

import { FunctionComponent, Key, useState } from 'react';
import CoreTable from '@/components/core/CoreTable';
import { ProductsColumns } from '@/lib/columns';
import ProductsCreate from '@/components/products/ProductsCreate';
import { ICustomer, IProduct } from '@/lib/types';
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
import ProductsDetail from '@/components/products/ProductsDetail';
import CoreLoading from '@/components/core/CoreLoading';
import CoreSelectCustomer from '@/components/core/CoreSelectCustomer';
import ProductsImport from '@/components/products/ProductsImport';

interface ProductsBoardProps {
  products: IProduct[];
  totalPage: number;
  currentPage: number;
  suppliers: ICustomer[];
  supplierId: string;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  const { products, totalPage, currentPage, suppliers, supplierId } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState();

  const onRowAction = async (key: Key) => {
    onOpen();

    const product = await getProductAction(key.toString());

    setSelectedProduct(product);
  };

  return (
    <div className='h-full flex flex-col gap-4'>
      <div className='flex-1'>
        <CoreTable
          columns={ProductsColumns}
          data={products}
          totalPage={totalPage}
          currentPage={currentPage}
          customTopContents={
            <div className='flex gap-2'>
              <CoreSelectCustomer
                suppliers={suppliers}
                supplierId={supplierId}
              />

              <ProductsCreate suppliers={suppliers} />

              <ProductsImport />
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
