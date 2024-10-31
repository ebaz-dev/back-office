'use client';

import { tr } from '@/lib/utils';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/navigation';

interface ProductsCreateProps { }

const ProductsCreate: FunctionComponent<ProductsCreateProps> = () => {
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
    </div>
  );
};

export default ProductsCreate;
