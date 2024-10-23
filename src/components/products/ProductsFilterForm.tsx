import { FunctionComponent, useRef } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { filterProductsAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { ProductsColumns } from '@/lib/columns';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { clearAllFilterAction } from '@/app/actions/main';
import { IBrand, IOption } from '@/lib/types';

interface ProductsFilterFormProps {
  brands: IBrand[];
}

const ProductsFilterForm: FunctionComponent<ProductsFilterFormProps> = ({
  brands
}) => {
  const ref = useRef<HTMLFormElement>(null);

  const clearAllFilter = async () => {
    ref.current?.reset();

    await clearAllFilterAction('/products');
  };

  const brandOptions: IOption[] = brands.map(brand => {
    return { value: brand.id, label: brand.name };
  });

  return (
    <form
      action={filterProductsAction}
      ref={ref}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreFormFields
        type='filter'
        fields={ProductsColumns({ brandOptions })}
        className='max-w-xs'
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
