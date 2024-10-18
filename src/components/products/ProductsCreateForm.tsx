import { FunctionComponent, useState } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { createProductAction } from '@/app/actions/products';
import { IOption, IProductsFieldProps } from '@/lib/types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { ProductsColumns } from '@/lib/columns';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import CoreImageList from '@/components/core/CoreImageList';

interface ProductsCreateFormProps {
  onClose: () => void;
}

const ProductsCreateForm: FunctionComponent<ProductsCreateFormProps> = ({
  onClose
}) => {
  const [images, setImages] = useState([]);
  const createProduct = createProductAction.bind(null, { images });

  const supplierOptions: IOption[] = [{ value: '123123', label: 'supplier 1' }];

  const brandOptions: IOption[] = [{ value: '123123asd', label: 'brand 1' }];

  const generalCategories: IOption[] = [{ value: '1223', label: 'gen 1' }];

  const subCategories: IOption[] = [{ value: '123123123', label: 'sub 1' }];

  const finalCategories: IOption[] = [{ value: '12', label: 'fin 1' }];

  const fieldOptions: IProductsFieldProps = {
    supplierOptions,
    brandOptions,
    generalCategories,
    subCategories,
    finalCategories
  };

  return (
    <form action={createProduct} className='flex flex-col gap-4'>
      <div className='flex gap-4 flex-wrap w-full overflow-x'>
        <CoreImageUploader
          images={images}
          setImages={setImages}
          className='w-20 h-20'
        />

        <CoreImageList images={images} className='w-20 h-20' />
      </div>

      <div className='w-full grid grid-cols-3 gap-4'>
        <CoreFormFields
          fields={ProductsColumns(fieldOptions)}
          hideFields={['id', 'images']}
        />
      </div>

      <CoreSubmitButton text='Хадгалах' onPress={onClose} />
    </form>
  );
};

export default ProductsCreateForm;
