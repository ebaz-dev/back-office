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
    <AvatarGroup max={max} size='md'>
      {images?.map((src: string, index: number) => {
        return <Avatar key={index} src={replaceMediaUrl(src)} />;
      })}
    </AvatarGroup>
  );
};

export default CoreGroupImages;
