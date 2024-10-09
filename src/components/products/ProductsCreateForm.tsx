import { FunctionComponent } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { useFormState } from 'react-dom';
import { createProductAction } from '@/app/actions/products';
import { IOption, IProductsFieldProps } from '@/lib/types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { ProductsColumns } from '@/lib/columns';

interface ProductsCreateFormProps {
  onClose: () => void;
}

const ProductsCreateForm: FunctionComponent<
  ProductsCreateFormProps
> = props => {
  const { onClose } = props;

  const [state, action] = useFormState(createProductAction, undefined);

  const supplierOptions: IOption[] = [{ value: '123123', label: 'supplier 1' }];

  const brandOptions: IOption[] = [{ value: '123123asd', label: 'brand 1' }];

  const generalCategories: IOption[] = [
    { value: '123123', label: 'category 1' }
  ];

  const subCategories: IOption[] = [{ value: '123123123', label: 'dada 1' }];

  const finalCategories: IOption[] = [
    { value: '123123123123', label: 'catedadagory 1' }
  ];

  const fieldOptions: IProductsFieldProps = {
    supplierOptions,
    brandOptions,
    generalCategories,
    subCategories,
    finalCategories
  };

  return (
    <form action={action} className='flex flex-col gap-4'>
      <div className='w-full grid grid-cols-3 gap-4'>
        <CoreFormFields
          fields={ProductsColumns(fieldOptions)}
          hideFields={['id']}
        />
      </div>

      <CoreSubmitButton text='Хадгалах' onPress={onClose} />
    </form>
  );
};

export default ProductsCreateForm;
