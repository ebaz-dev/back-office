import { FunctionComponent } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { useFormState } from 'react-dom';
import { filterProductsAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ICategory, IProductsFieldProps } from '@/lib/types';
import { ProductsColumns } from '@/lib/columns';

interface ProductsFilterFormProps {}

const ProductsFilterForm: FunctionComponent<
  ProductsFilterFormProps
> = props => {
  const router = useRouter();

  const initialState: any = {};

  const [state, action] = useFormState(filterProductsAction, initialState);

  const clearAllFilter = () => {
    router.push(`/products`);
  };

  return (
    <form action={action} className='grid grid-cols-7 gap-2 items-end'>
      <CoreFormFields
        fields={ProductsColumns()}
        className='max-w-xs'
        hideFields={true}
      />

      <CoreSubmitButton text='Хайх' />

      <Button onPress={clearAllFilter}>{tr('Цэвэрлэх')}</Button>
    </form>
  );
};

export default ProductsFilterForm;
