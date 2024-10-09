import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { FunctionComponent } from 'react';

interface CoreImageUploaderProps {
  setImages: (imageUrl: any) => void;
  images: string[];
}

const CoreImageUploader: FunctionComponent<CoreImageUploaderProps> = ({
  setImages,
  images
}) => {
  const handleFileChange = (e: any) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file: any) => URL.createObjectURL(file));

    setImages([...images, ...previews]);
  };

  return (
    <label className='w-40 h-40 flex items-center justify-center border border-dashed border-default rounded-md hover:border-primary cursor-pointer'>
      <PlusCircleIcon className='w-10 h-10 text-default' />

      <input type='file' className='hidden' onChange={handleFileChange} />
    </label>
  );
};

export default CoreImageUploader;
