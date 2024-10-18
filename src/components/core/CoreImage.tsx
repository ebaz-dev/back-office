import { NextImageSizes } from '@/config';
import { Spinner } from '@nextui-org/react';
import Image from 'next/image';
import { FunctionComponent, useState } from 'react';

interface CoreImageProps {
  src: string;
  objectFit?: 'contain' | 'cover';
}

const CoreImage: FunctionComponent<CoreImageProps> = ({ src, objectFit }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      {loading && <Spinner size='sm' />}

      <Image
        fill
        priority
        alt='ebazaar'
        src={src}
        onLoad={() => setLoading(false)}
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
