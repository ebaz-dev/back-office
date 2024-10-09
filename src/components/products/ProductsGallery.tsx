import { FunctionComponent, useState } from 'react';
import { IProduct } from '@/lib/types';
import CoreImage from '@/components/core/CoreImage';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import { useFormState } from 'react-dom';
import { updateProductImagesAction } from '@/app/actions/products';

interface ProductsGalleryProps {
  product: IProduct;
}

const ProductsGallery: FunctionComponent<ProductsGalleryProps> = props => {
  const { product } = props;

  const [imagesSrc, setImageSrc] = useState<any>([]);

  const body = {
    id: product.id,
    images: imagesSrc
  };

  const updateImage = updateProductImagesAction.bind(null, body);

  const images = [...imagesSrc, ...product.images];

  return (
    <form className='flex flex-col gap-4' action={updateImage}>
      <div className='flex gap-4 flex-wrap'>
        <CoreImageUploader setImage={setImageSrc} />

        {images.map((imageUrl: string, index: number) => {
          return (
            <div
              key={index}
              className='w-40 h-40 rounded-md overflow-hidden hover:outline outline-primary'
            >
              <CoreImage src={imageUrl} objectFit='cover' />
            </div>
          );
        })}
      </div>

      <CoreSubmitButton text='Хадгалах' />
    </form>
  );
};

export default ProductsGallery;
