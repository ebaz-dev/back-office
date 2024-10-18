import { MEDIA_UPLOAD } from '@/config';
import { cn, replaceMediaUrl } from '@/lib/utils';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { FunctionComponent } from 'react';

interface CoreImageUploaderProps {
  images: any[];
  setImages: (image: any) => void;
  className?: string;
}

const CoreImageUploader: FunctionComponent<CoreImageUploaderProps> = ({
  images,
  setImages,
  className
}) => {
  const handleFileChange = async (e: any) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file: any) => formData.append('files', file));

      const response: any = await fetch(
        `${MEDIA_UPLOAD}?ebazaar_admin_token=qweqweq12312313&preset=product`,
        {
          method: 'POST',
          body: formData
        }
      )
        .then(res => res.json())
        .catch(err => console.log(err));

      if (response && response.data) {
        const responseImages = response.data.map((item: { image: string }) =>
          replaceMediaUrl(item.image)
        );

        setImages([...images, ...responseImages]);
      }
    }
  };

  return (
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
  );
};

export default CoreImageUploader;
