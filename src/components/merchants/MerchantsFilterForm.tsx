import { FunctionComponent, useRef } from 'react';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { changePathAction } from '@/app/actions/main';
import { filterMerchantAction } from '@/app/actions/merchants';

interface MerchantFilterFormProps {}

const MerchantFilterForm: FunctionComponent<MerchantFilterFormProps> = ({}) => {
  const ref = useRef<HTMLFormElement>(null);

  const clearAllFilter = async () => {
    ref.current?.reset();

    changePathAction('/merchants');
  };

  return (
    <form
      action={filterMerchantAction}
      ref={ref}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreSubmitButton
        text='Хайх'
        startContent={<FunnelIcon className='w-4 h-4' />}
      />

      <Button
        type='button'
        onPress={clearAllFilter}
        color='danger'
        endContent={<BackspaceIcon className='w-4 h-4' />}
      >
        {tr('Цэвэрлэх')}
      </Button>
    </form>
  );
};

export default MerchantFilterForm;
