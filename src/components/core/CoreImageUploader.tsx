import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { FunctionComponent } from 'react';

interface CoreImageUploaderProps {
  setImage: (imageUrl: any) => void;
}

const CoreImageUploader: FunctionComponent<CoreImageUploaderProps> = ({
  setImage
}) => {
  const onChange = (e: any) => {
    for (const file of e.target.files) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        setImage((imgs: any) => [...imgs, reader.result]);
      };

      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  return (
    <label className='w-40 h-40 flex items-center justify-center border border-dashed border-default rounded-md hover:border-primary cursor-pointer'>
      <PlusCircleIcon className='w-10 h-10 text-default' />

      <input
        type='file'
        name='images'
        id='uploadFile1'
        className='hidden'
        onChange={onChange}
      />
    </label>
  );
};

export default CoreImageUploader;
