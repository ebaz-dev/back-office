import { FunctionComponent, useRef } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { filterProductsAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { ProductsColumns } from '@/lib/columns';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { clearAllFilterAction } from '@/app/actions/main';

interface ProductsFilterFormProps {
  supplierId: string;
}

const ProductsFilterForm: FunctionComponent<ProductsFilterFormProps> = ({
  supplierId
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const filterProducts = filterProductsAction.bind(null, supplierId);

  const clearAllFilter = async () => {
    ref.current?.reset();

    await clearAllFilterAction('/products', supplierId);
  };

  const hiddenFields = [
    'isActive',
    'supplier',
    'images',
    'generalCategory',
    'subCategory',
    'generalCategory',
    'finalCategory',
    'stock',
    'unit',
    'price',
    'availableStock',
    'inCase',
    'isAlcohol',
    'cityTax'
  ];

  return (
    <form
      action={filterProducts}
      ref={ref}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreFormFields
        fields={ProductsColumns()}
        className='max-w-xs'
        hideFields={hiddenFields}
      />

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
