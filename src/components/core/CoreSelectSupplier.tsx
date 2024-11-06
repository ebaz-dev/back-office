import { chooseSupplierAction, removeSupplierAction } from '@/app/actions/main';
import { ICustomer } from '@/types';
import { tr } from '@/lib/utils';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { FunctionComponent, Key } from 'react';

interface CoreSelectSupplierProps {
  suppliers: ICustomer[];
  chosenSupplier: ICustomer;
}

const CoreSelectSupplier: FunctionComponent<
  CoreSelectSupplierProps
> = props => {
  const { suppliers, chosenSupplier } = props;

  const pathname = usePathname();

  const onSelectionChange = (key: Key | null) => {
    const findSupplier = suppliers.find(supplier => supplier.id === key);

    if (findSupplier && key) {
      chooseSupplierAction(findSupplier, pathname);
    }
  };

  const onClear = () => {
    removeSupplierAction(pathname);
  };

  return (
    <Autocomplete
      className='max-w-xs'
      defaultSelectedKey={chosenSupplier?.id}
      defaultItems={suppliers}
      color='primary'
      label={tr('-- Нийлүүлэгч сонгох --')}
      variant='flat'
      radius='none'
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
      {item => <AutocompleteItem key={item.id}>{item.name}</AutocompleteItem>}
    </Autocomplete>
  );
};

export default CoreSelectSupplier;
