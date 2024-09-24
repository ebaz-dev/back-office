'use client';

import { deleteCookie, setCookie } from '@/app/actions/cookies';
import { ICustomer } from '@/lib/types';
import { tr } from '@/lib/utils';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { FunctionComponent, Key } from 'react';

interface CoreSelectSupplierProps {
  suppliers: ICustomer[];
  supplier: ICustomer;
}

const CoreSelectSupplier: FunctionComponent<
  CoreSelectSupplierProps
> = props => {
  const { suppliers, supplier } = props;

  const router = useRouter();
  const pathname = usePathname();

  const onSelectionChange = (key: Key | null) => {
    const supplier = suppliers.find(supplier => supplier.id === key);

    setCookie('supplier', supplier);

    router.push(`${pathname}?customerId=${key ? key : ''}&page=1`);
  };

  const onClear = () => {
    deleteCookie('supplier');

    router.push(`${pathname}`);
  };

  return (
    <Autocomplete
      selectedKey={supplier?.id}
      aria-label='supplier complete'
      defaultItems={suppliers}
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
        <AutocompleteItem key={supplier.id}>{supplier.name}</AutocompleteItem>
      )}
    </Autocomplete>
  );
};

export default CoreSelectSupplier;
