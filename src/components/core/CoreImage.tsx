import { NextImageSizes } from '@/config';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CoreImageProps {
  src: string;
  objectFit?: 'contain' | 'cover';
}

const CoreImage: FunctionComponent<CoreImageProps> = ({ src, objectFit }) => {
  return (
    <div className='w-full h-full relative'>
      <Image
        fill
        priority
        alt='ebazaar'
        src={src}
        sizes={NextImageSizes}
        style={{
          objectFit: objectFit || 'contain',
          objectPosition: 'center'
        }}
      />
    </div>
  );
};

export default CoreImage;
