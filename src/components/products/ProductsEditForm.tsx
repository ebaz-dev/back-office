import { FunctionComponent } from 'react';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { ProductsColumns } from '@/lib/columns';
import CoreFormFields from '../core/CoreFormFields';

interface ProductsEditFormProps {}

const ProductsEditForm: FunctionComponent<ProductsEditFormProps> = () => {
  return (
    <form className='flex flex-col gap-4'>
      <div className='grid grid-cols-3 gap-4'>
        <CoreFormFields fields={ProductsColumns()} className='max-w-xs' />
      </div>

      <CoreSubmitButton text='Хадгалах' className='w-full' />
    </form>
  );
};

export default ProductsEditForm;
