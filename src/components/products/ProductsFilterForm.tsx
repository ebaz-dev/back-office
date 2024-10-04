import { FunctionComponent, useRef } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { useFormState } from 'react-dom';
import { filterProductsAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { ProductsColumns } from '@/lib/columns';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface ProductsFilterFormProps {}

const ProductsFilterForm: FunctionComponent<
  ProductsFilterFormProps
> = props => {
  const ref = useRef<HTMLFormElement>(null);

  const [state, action] = useFormState(filterProductsAction, {} as any);

  const clearAllFilter = () => {
    ref.current?.reset();
  };

  return (
    <form
      action={action}
      ref={ref}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreFormFields
        fields={ProductsColumns()}
        className='max-w-xs'
        hideFields={true}
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
