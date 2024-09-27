'use client';

import { deleteCookie, setCookie } from '@/app/actions/cookies';
import { ICustomer } from '@/lib/types';
import { tr } from '@/lib/utils';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { FunctionComponent, Key } from 'react';

interface CoreSelectCustomerProps {
  suppliers: ICustomer[];
  supplierId: string;
}

const CoreSelectCustomer: FunctionComponent<
  CoreSelectCustomerProps
> = props => {
  const { suppliers, supplierId } = props;

  const router = useRouter();
  const pathname = usePathname();

  const onSelectionChange = (key: Key | null) => {
    const findSupplier = suppliers.find(supplier => supplier._id === key);

    setCookie('supplierId', findSupplier?._id);

    router.push(`${pathname}?customerId=${key ? key : ''}&page=1`);
  };

  const onClear = () => {
    deleteCookie('supplierId');

    router.push(`${pathname}`);
  };

  return (
    <Autocomplete
      aria-label='supplier complete'
      defaultItems={suppliers}
      defaultSelectedKey={supplierId}
      variant='bordered'
      placeholder={tr('Нийлүүлэгч сонгох')}
      className='max-w-xs'
      onSelectionChange={onSelectionChange}
      clearButtonProps={{
        onPress: onClear
      }}
      listboxProps={{
        emptyContent: (
          <span className='text-xs'>{tr('Нийлүүлэгч олдсонгүй')}.</span>
        )
      }}
    >
      {supplier => (
        <AutocompleteItem key={supplier._id}>{supplier.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default CoreSelectCustomer;
