import { FunctionComponent } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { ProductsRegFormFields } from '@/lib/formFields';
import { useFormState } from 'react-dom';
import { productRegAction } from '@/app/actions/products';
import { IOption } from '@/lib/types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { Input } from '@nextui-org/react';
import { tr } from '@/lib/utils';

interface ProductsRegFormProps {
  onClose: () => void;
}

const ProductsRegForm: FunctionComponent<ProductsRegFormProps> = ({
  onClose
}) => {
  const [state, action] = useFormState(productRegAction, undefined);

  const supplierOptions: IOption[] = [{ value: '123123', label: 'supplier 1' }];

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
        name='product_image'
        label={tr('Бүтээгдэхүүний зураг')}
        classNames={{
          label: 'text-xs'
        }}
      />

      <div className='w-full grid grid-cols-2 gap-4'>
        <CoreFormFields fields={ProductsRegFormFields(fieldOptions)} />
      </div>

      <CoreSubmitButton text='Хадгалах' onPress={onClose} />
    </form>
  );
};

export default ProductsRegForm;
