'use client';

import { FunctionComponent, useRef } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { filterProductsAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { changePathAction } from '@/app/actions/main';
import { PRODUCTS_FILTER_FIELDS } from '@/components/products/constants';

interface ProductsFilterFormProps {}

const ProductsFilterForm: FunctionComponent<ProductsFilterFormProps> = () => {
  const ref = useRef<HTMLFormElement>(null);

  const clearAllFilter = () => {
    ref.current?.reset();

    changePathAction('/products');
  };

  return (
    <form
      action={filterProductsAction}
      ref={ref}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreFormFields fields={PRODUCTS_FILTER_FIELDS} />

      <CoreSubmitButton
        text='Хайх'
        startContent={<FunnelIcon className='w-4 h-4' />}
      />

      <Button
        type='button'
        onPress={clearAllFilter}
        color='danger'
        endContent={<BackspaceIcon className='w-4 h-4' />}
      >
        {tr('Цэвэрлэх')}
      </Button>
    </form>
  );
};

export default ProductsFilterForm;
