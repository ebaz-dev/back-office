'use client';

import { tr } from '@/lib/utils';
import { PlusIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { FunctionComponent } from 'react';
import ProductsCreateForm from '@/components/products/ProductsCreateForm';
import { useRouter } from 'next/navigation';

interface ProductsCreateProps {}

const ProductsCreate: FunctionComponent<ProductsCreateProps> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const onPress = () => {
    router.push('/products/create');
  };

  return (
    <div>
      <Button
        color='primary'
        onPress={onPress}
        startContent={<PlusIcon className='w-5 h-5' />}
      >
        {tr('Нэг бүтээгдэхүүн бүртгэх')}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='5xl'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Бүтээгдэхүүн бүртгэх')}
              </ModalHeader>
              <ModalBody className='pb-4'>
                <ProductsCreateForm onClose={onClose} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductsCreate;
