import { FunctionComponent } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { useFormState } from 'react-dom';
import { createProductAction } from '@/app/actions/products';
import { ICustomer, IOption } from '@/lib/types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { Input } from '@nextui-org/react';
import { tr } from '@/lib/utils';
import { ProductsFormFields } from '@/lib/formFields';

interface ProductsCreateFormProps {
  onClose: () => void;
  suppliers: ICustomer[];
}

const ProductsCreateForm: FunctionComponent<
  ProductsCreateFormProps
> = props => {
  const { onClose, suppliers } = props;

  const [state, action] = useFormState(createProductAction, undefined);

  const supplierOptions: IOption[] = suppliers.map(supplier => {
    return { value: supplier.id, label: supplier.name };
  });

  const brandOptions: IOption[] = [{ value: '123123', label: 'brand 1' }];

  const categoryOptions: IOption[] = [{ value: '123123', label: 'category 1' }];

  const fieldOptions = {
    categoryOptions,
    supplierOptions,
    brandOptions
  };

  return (
    <form action={action} className='flex flex-col gap-4'>
      <Input
        type='file'
        variant='bordered'
        size='md'
        name='images'
        label={tr('Бүтээгдэхүүний зураг')}
        classNames={{
          label: 'text-xs'
        }}
      />

      <div className='w-full grid grid-cols-2 gap-4'>
        <CoreFormFields fields={ProductsFormFields(fieldOptions)} />
      </div>

      <CoreSubmitButton text='Хадгалах' onPress={onClose} />
    </form>
  );
};

export default ProductsCreateForm;
