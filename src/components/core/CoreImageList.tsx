import { FunctionComponent, useState } from 'react';
import CoreImage from '@/components/core/CoreImage';
import { cn, replaceMediaUrl } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface CoreImageListProps {
  images: string[];
  className?: string;
}

const CoreImageList: FunctionComponent<CoreImageListProps> = ({
  images,
  className
}) => {
  const [showXButton, setShowXButton] = useState<number>(1000);

  const deleteImage = (index: number) => {
    images.splice(index, 1);
  };

  return images?.map((imageUrl: string, index: number) => {
    return (
      <div
        key={index}
        className='relative hover:outline outline-primary rounded-md'
        onMouseEnter={() => setShowXButton(index)}
        onMouseLeave={() => setShowXButton(1000)}
      >
        <div className={cn('w-40 h-40 rounded-md overflow-hidden ', className)}>
          <CoreImage
            src={
              !imageUrl.includes('https') ? replaceMediaUrl(imageUrl) : imageUrl
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
  });
};

export default CoreImageList;
