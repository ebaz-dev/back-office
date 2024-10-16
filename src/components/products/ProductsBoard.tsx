'use client';

import { FunctionComponent, Key, useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { IBrand, IProduct } from '@/lib/types';
import { ProductsColumns } from '@/lib/columns';
import CoreTable from '@/components/core/CoreTable';
import CoreLoading from '@/components/core/CoreLoading';
import ProductsDetail from '@/components/products/ProductsDetail';
import ProductsFilterForm from '@/components/products/ProductsFilterForm';

interface ProductsBoardProps {
  supplierId: string;
  brands: IBrand[];
  products: IProduct[];
  totalPage: number;
  currentPage: number;
}

const ProductsBoard: FunctionComponent<ProductsBoardProps> = props => {
  const { supplierId, products, totalPage, currentPage, brands } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const onRowAction = async (key: Key) => {
    onOpen();

    const product: any = products.find(item => item.id === key);

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
          customTopContents={
            <ProductsFilterForm supplierId={supplierId} brands={brands} />
          }
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {selectedProduct?.name}
              </ModalHeader>
              <ModalBody className='pb-4'>
                {!selectedProduct ? (
                  <CoreLoading />
                ) : (
                  <ProductsDetail product={selectedProduct} />
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductsBoard;
