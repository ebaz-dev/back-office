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
import CoreCanAccess from './CoreCanAccess';
import { PERMISSION_ACTIONS } from '@/constants/common';

export default function CoreActions({ resource }: { resource: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = () => {
    router.push(`${pathname}/edit`);
  };

  const handleDelete = async () => {
    try {
      // Add your delete API call here
      // await deleteProduct(productId);
      onClose();
      router.refresh();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <>
      <div className='flex gap-2'>
        <CoreCanAccess
          permissionToCheck={{
            resource,
            action: PERMISSION_ACTIONS.UPDATE
          }}
        >
          <Button
            size='sm'
            color='primary'
            onClick={handleEdit}
            startContent={<PencilIcon className='h-[14px] w-[14px]' />}
          >
            Өөрчлөх
          </Button>
        </CoreCanAccess>
        <CoreCanAccess
          permissionToCheck={{
            resource,
            action: PERMISSION_ACTIONS.DELETE
          }}
        >
          <Button
            size='sm'
            color='danger'
            onClick={onOpen}
            startContent={<TrashIcon className='h-[14px] w-[14px]' />}
          >
            Устгах
          </Button>
        </CoreCanAccess>
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
