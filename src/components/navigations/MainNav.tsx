import { FunctionComponent } from 'react';
import { cn } from '@/lib/utils';
import CoreThemeSwitcher from '@/components/core/CoreThemeSwitcher';
import CoreUserDropDown from '@/components/core/CoreUserDropDown';
import CoreSelectSupplier from '@/components/core/CoreSelectSupplier';
import { ICustomer } from '@/lib/types';

interface MainNavProps {
  isOpen: boolean;
  suppliers: ICustomer[];
  chosenSupplier: ICustomer;
}

const MainNav: FunctionComponent<MainNavProps> = props => {
  const { isOpen, suppliers, chosenSupplier } = props;

  return (
    <div
      className={cn(
        'w-full flex items-center gap-4 fixed top-0 left-0 transition-all shadow-md bg-background z-40',
        isOpen ? 'pl-60' : 'pl-20'
      )}
    >
      <CoreSelectSupplier
        suppliers={suppliers}
        chosenSupplier={chosenSupplier}
      />

      <div className='flex ml-auto p-2 items-center gap-4'>
        <CoreThemeSwitcher />

        <CoreUserDropDown />
      </div>
    </div>
  );
};

export default MainNav;
