import { FunctionComponent, useState } from 'react';
import { IProduct } from '@/lib/types';
import CoreImage from '@/components/core/CoreImage';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import CoreImageUploader from '@/components/core/CoreImageUploader';
import { updateProductImageAction } from '@/app/actions/products';
import { replaceMediaUrl } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ProductsGalleryProps {
  product: IProduct;
}

const ProductsGallery: FunctionComponent<ProductsGalleryProps> = props => {
  const { product } = props;

  const [images, setImages] = useState(product.images);
  const [showXButton, setShowXButton] = useState<number>(1000);

  const addImage = updateProductImageAction.bind(null, {
    id: product.id,
    images
  });

  const deleteImage = (index: number) => {
    images.splice(index, 1);
  };

  return (
    <form className='flex flex-col gap-4' action={addImage}>
      <div className='flex gap-4 flex-wrap'>
        <CoreImageUploader images={images} setImages={setImages} />

        {images?.map((imageUrl: string, index: number) => {
          return (
            <div
              key={index}
              className='relative hover:outline outline-primary rounded-md'
              onMouseEnter={() => setShowXButton(index)}
              onMouseLeave={() => setShowXButton(1000)}
            >
              <div className='w-40 h-40 rounded-md overflow-hidden '>
                <CoreImage
                  src={
                    !imageUrl.includes('https')
                      ? replaceMediaUrl(imageUrl)
                      : imageUrl
                  }
                  objectFit='cover'
                />
              </div>

              <Button
                isIconOnly
                className={`absolute -top-2 -right-2 z-20 ${
                  index === showXButton ? 'flex' : 'hidden'
                }`}
                radius='full'
                size='sm'
                color='danger'
                onPress={() => deleteImage(index)}
              >
                <XMarkIcon className='w-4 h-4' />
              </Button>
            </div>
          );
        })}
      </div>

      <CoreSubmitButton text='Хадгалах' />
    </form>
  );
};

export default ProductsGallery;
