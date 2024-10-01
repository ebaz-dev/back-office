import { deleteCookie, setCookie } from '@/app/actions/cookies';
import { ICustomer } from '@/lib/types';
import { tr } from '@/lib/utils';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { usePathname, useRouter } from 'next/navigation';
import { FunctionComponent, Key } from 'react';

interface CoreSelectCustomerProps {
  suppliers: ICustomer[];
  chosenSupplier: ICustomer;
}

const CoreSelectCustomer: FunctionComponent<
  CoreSelectCustomerProps
> = props => {
  const { suppliers, chosenSupplier } = props;

  const router = useRouter();
  const pathname = usePathname();

  const onSelectionChange = (key: Key | null) => {
    const findSupplier = suppliers.find(supplier => supplier.id === key);

    if (findSupplier && key) {
      setCookie('supplier', JSON.stringify(findSupplier)),
        router.push(`${pathname}?supplierId=${key}`);
    }
  };

  const onClear = () => {
    deleteCookie('supplier'), router.push(pathname);
  };

  return (
    <Autocomplete
      className='max-w-xs'
      defaultSelectedKey={chosenSupplier?.id}
      defaultItems={suppliers}
      color='primary'
      label={tr('-- Харилцагч сонгох --')}
      variant='flat'
      radius='none'
      onSelectionChange={onSelectionChange}
      clearButtonProps={{
        onPress: onClear
      }}
      listboxProps={{
        emptyContent: (
          <span className='text-xs'>{tr('Харилцагч олдсонгүй')}.</span>
        )
      }}
    >
      {item => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
    </Autocomplete>
  );
};

export default CoreSelectCustomer;
