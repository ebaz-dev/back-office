'use client';

import { FunctionComponent, useState } from 'react';
import { createProductAction } from '@/app/actions/products';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import { useFormState } from 'react-dom';
import { Card, CardBody } from '@nextui-org/react';

interface ProductsCreateFormProps {}

const ProductsCreateForm: FunctionComponent<ProductsCreateFormProps> = () => {
  const [images, setImages] = useState<string[]>([]);
  const [state, action] = useFormState(createProductAction, undefined);

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

      <div className='w-full grid grid-cols-3 gap-4'></div>

      <CoreSubmitButton text='Хадгалах' />
    </form>
  );
};

export default ProductsCreateForm;
