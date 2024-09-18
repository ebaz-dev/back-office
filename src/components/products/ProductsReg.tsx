'use client';

import { tr } from '@/lib/utils';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { FunctionComponent } from 'react';
import ProductsRegForm from '@/components/products/ProductsRegForm';

interface ProductsRegProps {}

const ProductsReg: FunctionComponent<ProductsRegProps> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button
        color='primary'
        onPress={onOpen}
        startContent={<PlusIcon className='w-5 h-5' />}
      >
        {tr('Нэг бүтээгдэхүүн бүртгэх')}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Бүтээгдэхүүн бүртгэх')}
              </ModalHeader>
              <ModalBody className='pb-4'>
                <ProductsRegForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductsReg;
