import { FunctionComponent } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { ProductsFormFields } from '@/lib/formFields';
import { useFormState } from 'react-dom';
import { filterProductsAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { ICategory } from '@/lib/types';

interface ProductsFilterFormProps {
  supplierId: string;
  categories: ICategory[];
}

const ProductsFilterForm: FunctionComponent<
  ProductsFilterFormProps
> = props => {
  const { supplierId, categories } = props;

  const router = useRouter();

  const initialState: any = {
    supplierId
  };

  const [state, action] = useFormState(filterProductsAction, initialState);

  const clearAllFilter = () => {
    router.push(`/products?customerId=${supplierId}`);
  };

  const fieldOptions = {
    brandOptions: [{ value: '123', label: 'asda' }],
    categoryOptions: categories.map((category: ICategory) => {
      return { value: category.id, label: category.name };
    })
  };

  return (
    <form action={action} className='flex gap-2 items-end'>
      <CoreFormFields fields={ProductsFormFields(fieldOptions)} />

      <CoreSubmitButton text='Хайх' />

      <Button onPress={clearAllFilter}>{tr('Цэвэрлэх')}</Button>
    </form>
  );
};

export default ProductsFilterForm;
