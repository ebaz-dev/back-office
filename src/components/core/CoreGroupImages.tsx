import { replaceMediaUrl } from '@/lib/utils';
import { Avatar, AvatarGroup } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface CoreGroupImagesProps {
  images: string[];
  max?: number;
}

const CoreGroupImages: FunctionComponent<CoreGroupImagesProps> = ({
  images,
  max = 3
}) => {
  return (
    <AvatarGroup max={max} size='md' classNames={{ count: 'bg-default-100' }}>
      {images?.map((src: string, index: number) => {
        return (
          <Avatar
            key={index}
            src={replaceMediaUrl(src)}
            classNames={{ base: 'bg-default-100' }}
          />
        );
      })}
    </AvatarGroup>
  );
};

export default CoreGroupImages;
