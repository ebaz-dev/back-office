import { tr } from '@/lib/utils';
import { Spinner } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface CoreLoadingProps {}

const CoreLoading: FunctionComponent<CoreLoadingProps> = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <Spinner
        label={tr('Уншиж байна.')}
        color='primary'
        classNames={{ label: 'text-sm' }}
      />
    </div>
  );
};

export default CoreLoading;
