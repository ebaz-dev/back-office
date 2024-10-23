import { FunctionComponent, useRef } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { OrderColumns } from '@/lib/columns';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { filterOrdersAction } from '@/app/actions/order';
import { clearAllFilterAction } from '@/app/actions/main';

interface OrderFilterFormProps {}

const OrderFilterForm: FunctionComponent<OrderFilterFormProps> = ({}) => {
  const ref = useRef<HTMLFormElement>(null);

  const clearAllFilter = async () => {
    ref.current?.reset();

    await clearAllFilterAction('/order');
  };

  return (
    <form
      action={filterOrdersAction}
      ref={ref}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreFormFields
        type='filter'
        fields={OrderColumns()}
        className='max-w-xs'
      />

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

export default OrderFilterForm;
