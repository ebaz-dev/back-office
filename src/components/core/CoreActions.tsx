'use client';

import {
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '@nextui-org/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';

export default function CoreActions() {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    router.push(`${pathname}/edit`);
  };

  const handleDelete = async () => {
    try {
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <div className='flex gap-2'>
        <Button
          size='sm'
          color='primary'
          onClick={handleEdit}
          startContent={<PencilIcon className='h-[14px] w-[14px]' />}
        >
          Өөрчлөх
        </Button>

        <Button
          size='sm'
          color='danger'
          onClick={onOpen}
          startContent={<TrashIcon className='h-[14px] w-[14px]' />}
        >
          Устгах
        </Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {onClose => (
            <>
              <ModalHeader>Устгах</ModalHeader>
              <ModalBody>
                Та энэ бүтээгдэхүүнийг устгахдаа итгэлтэй байна уу?
              </ModalBody>
              <ModalFooter>
                <Button variant='light' onPress={onClose}>
                  Үгүй
                </Button>
                <Button color='danger' onPress={handleDelete}>
                  Устгах
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
