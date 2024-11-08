'use client';

import { tr } from '@/lib/utils';
import { Button } from '@nextui-org/react';
import { FunctionComponent, useRef } from 'react';
import CoreFormFields from '@/components/core/CoreFormFields';
import { ORDER_FILTER_FIELDS } from '@/components/orders/constants';
import CoreSubmitButton from '@/components/core/CoreSubmitButton';
import { BackspaceIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { filterOrdersAction } from '@/app/actions/orders';
import { changePathAction } from '@/app/actions/main';

interface OrdersFilterFormProps {}

const OrdersFilterForm: FunctionComponent<OrdersFilterFormProps> = ({}) => {
  const ref = useRef<HTMLFormElement>(null);

  const clearAllFilter = () => {
    ref.current?.reset();

    changePathAction('/orders');
  };

  return (
    <form
      ref={ref}
      action={filterOrdersAction}
      className='grid grid-cols-7 gap-2 items-end'
    >
      <CoreFormFields fields={ORDER_FILTER_FIELDS} />

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

export default OrdersFilterForm;
