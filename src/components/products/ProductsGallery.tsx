'use client';

import { FunctionComponent, useState } from 'react';
import { IProduct } from '@/types/product.types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import { updateProductImageAction } from '@/app/actions/products';

interface ProductsGalleryProps {
  product: IProduct;
}

const ProductsGallery: FunctionComponent<ProductsGalleryProps> = props => {
  const { product } = props;

  const [images, setImages] = useState(product.images);

  const addImage = updateProductImageAction.bind(null, {
    id: product.id,
    images
  });

  return (
    <form className='flex flex-col gap-4' action={addImage}>
      <CoreImageUploader images={images} setImages={setImages} />
      <CoreSubmitButton text='Хадгалах' />
    </form>
  );
};

export default ProductsGallery;
