import { FunctionComponent } from 'react';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';

interface ProductsEditFormProps {}

const ProductsEditForm: FunctionComponent<ProductsEditFormProps> = () => {
  return (
    <form>
      <CoreSubmitButton text='Хадгалах' className='w-full' />
    </form>
  );
};

export default ProductsEditForm;
