import { tr } from '@/lib/utils';
import { FunctionComponent } from 'react';

interface CoreEmptyProps {}

const CoreEmpty: FunctionComponent<CoreEmptyProps> = () => {
  return (
    <div className='text-sm w-full h-full flex items-center justify-center'>
      {tr('Мэдээлэл байхгүй.')}
    </div>
  );
};

export default CoreEmpty;
