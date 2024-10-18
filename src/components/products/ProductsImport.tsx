import { tr } from '@/lib/utils';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@nextui-org/react';
import { FunctionComponent } from 'react';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { importProductsAction } from '@/app/actions/products';
import { DocumentPlusIcon } from '@heroicons/react/24/outline';

interface ProductsImportProps {}

const ProductsImport: FunctionComponent<ProductsImportProps> = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onPress = () => {
    onOpen();
  };

  return (
    <div>
      <Button
        color='primary'
        onPress={onPress}
        startContent={<DocumentPlusIcon className='w-5 h-5' />}
      >
        {tr('Масс импорт')}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='md'>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                {tr('Масс импорт')}
              </ModalHeader>
              <ModalBody className='pb-4'>
                <form
                  action={importProductsAction}
                  className='flex-col flex gap-4'
                >
                  <Input
                    type='file'
                    variant='bordered'
                    size='md'
                    label={tr('File')}
                    name='images'
                    classNames={{
                      label: 'text-xs'
                    }}
                  />

                  <CoreSubmitButton text='Хадгалах' onPress={onClose} />
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductsImport;
