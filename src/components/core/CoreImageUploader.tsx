import { uploadImageAction } from '@/app/actions/main';
import { cn, replaceMediaUrl } from '@/lib/utils';
import { PlusCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FunctionComponent, useState, useTransition } from 'react';
import CoreImage from '@/components/core/CoreImage';
import { Button, Spinner } from '@nextui-org/react';

interface CoreImageUploaderProps {
  images: string[];
  setImages: (images: string[]) => void;
  className?: string;
}

const CoreImageUploader: FunctionComponent<CoreImageUploaderProps> = ({
  images,
  setImages,
  className
}) => {
  const [showXButton, setShowXButton] = useState<number>(1000);
  const [isPending, startTransition] = useTransition();

  const deleteImage = (index: number) => {
    images.splice(index, 1);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const files = Array.from(e.target.files);

    if (files.length > 0) {
      startTransition(async () => {
        const formData = new FormData();
        files.forEach((file: any) => formData.append('files', file));

        const response = await uploadImageAction(formData);

        if (response && response.data) {
          const responseImages = response.data.map((item: { image: string }) =>
            replaceMediaUrl(item.image)
          );

          setImages([...images, ...responseImages]);
        }
      });
    }
  };

  return (
    <div className='flex gap-4 flex-wrap'>
      <label
        className={cn(
          'w-40 h-40 flex items-center justify-center border border-dashed border-default rounded-md hover:border-primary cursor-pointer',
          className
        )}
      >
        <PlusCircleIcon className='w-6 h-6 text-default' />

        <input
          type='file'
          name='images'
          className='hidden'
          multiple
          onChange={handleFileChange}
        />
      </label>

      {images.map((imageUrl: string, index: number) => {
        return (
          <div
            key={index}
            className='relative hover:outline outline-primary rounded-md'
            onMouseEnter={() => setShowXButton(index)}
            onMouseLeave={() => setShowXButton(1000)}
          >
            <div
              className={cn(
                'w-40 h-40 rounded-md overflow-hidden flex items-center justify-center',
                className
              )}
            >
              <CoreImage
                src={
                  !imageUrl.includes('https')
                    ? replaceMediaUrl(imageUrl)
                    : imageUrl
                }
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

      {isPending && (
        <div
          className={cn(
            'w-40 h-40 rounded-md overflow-hidden flex items-center justify-center',
            className
          )}
        >
          <Spinner size='sm' />
        </div>
      )}
    </div>
  );
};

export default CoreImageUploader;
