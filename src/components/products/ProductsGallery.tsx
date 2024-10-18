import { FunctionComponent, useState } from 'react';
import { IProduct } from '@/lib/types';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import { updateProductImageAction } from '@/app/actions/products';
import CoreImageList from '@/components/core/CoreImageList';

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
      <div className='flex gap-4 flex-wrap'>
        <CoreImageUploader images={images} setImages={setImages} />

        <CoreImageList images={images} />
      </div>

      <CoreSubmitButton text='Хадгалах' />
    </form>
  );
};

export default ProductsGallery;
