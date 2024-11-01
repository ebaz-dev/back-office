'use client';

import { FunctionComponent, useState } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { createProductAction } from '@/app/actions/products';
import { IBrand, IOption, IProductsFieldProps } from '@/types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { ProductsColumns } from '@/constants/columns/products';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import { useFormState } from 'react-dom';
import { Card, CardBody } from '@nextui-org/react';
interface ProductsCreateFormProps {
  brands: IBrand[];
}

const ProductsCreateForm: FunctionComponent<ProductsCreateFormProps> = ({
  brands
}) => {
  const [images, setImages] = useState<string[]>([]);
  const [state, action] = useFormState(createProductAction, undefined);


  const supplierOptions: IOption[] = [{ value: 123123, label: 'supplier 1' }];

  const brandOptions: IOption[] = brands.map(brand => ({
    value: brand.id,
    label: brand.name
  }));

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
    <form action={action} className='flex flex-col gap-4'>
      {state?.message && (
        <Card className='bg-danger text-white text-xs'>
          <CardBody>{state?.message}</CardBody>
        </Card>
      )}
      <CoreImageUploader
        images={images}
        setImages={setImages}
        className='w-20 h-20'
      />

      <div className='w-full grid grid-cols-3 gap-4'>
        <CoreFormFields
          fields={ProductsColumns(fieldOptions).filter(field => field.isCreatable)}
          type='create'
          errors={state?.errors}
        />
      </div>

      <CoreSubmitButton text='Хадгалах' />
    </form>
  );
};

export default ProductsCreateForm;
