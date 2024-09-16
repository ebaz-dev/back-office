import Image from 'next/image';
import { FunctionComponent } from 'react';

interface CoreImageProps {
  src: string;
}

const CoreImage: FunctionComponent<CoreImageProps> = ({ src }) => {
  return (
    <div className='w-full h-full relative'>
      <Image fill priority alt='ebazaar' src={src} />
    </div>
  );
};

export default CoreImage;
