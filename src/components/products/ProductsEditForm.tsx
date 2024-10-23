import { FunctionComponent } from 'react';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { ProductsColumns } from '@/lib/columns';
import CoreFormFields from '@/components/core/CoreFormFields';
import { IProduct } from '@/lib/types';
import { updateProductAction } from '@/app/actions/products';

interface ProductsEditFormProps {
  product: IProduct;
}

const ProductsEditForm: FunctionComponent<ProductsEditFormProps> = ({
  product
}) => {
  return (
    <form className='flex flex-col gap-4' action={updateProductAction}>
      <div className='grid grid-cols-3 gap-4'>
        <CoreFormFields
          fields={ProductsColumns({}, product)}
          className='max-w-xs'
          type='edit'
        />
      </div>

      <CoreSubmitButton text='Хадгалах' className='w-full' />
    </form>
  );
};

export default ProductsEditForm;
