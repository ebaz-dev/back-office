'use client';

import MainNav from '@/components/navigations/MainNav';
import SideNav from '@/components/navigations/SideNav';
import CoreBreadcrumb from '@/components/core/CoreBreadcrumb';
import CoreBackButton from '@/components/core/CoreBackButton';
import { ICustomer } from '@/types/customer.types';
import { FunctionComponent, ReactNode, useState } from 'react';

interface NavProviderProps {
  children: ReactNode;
  suppliers: ICustomer[];
  chosenSupplier: ICustomer;
}

const NavProvider: FunctionComponent<NavProviderProps> = props => {
  const { children, suppliers, chosenSupplier } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex h-screen'>
      <div className={isOpen ? 'w-60' : 'w-20'}>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className='flex-1 flex flex-col h-full w-full overflow-hidden'>
        <div className='h-14'>
          <MainNav
            isOpen={isOpen}
            suppliers={suppliers}
            chosenSupplier={chosenSupplier}
          />
        </div>

        <div className='p-4'>
          <div className='px-4 flex items-center bg-background rounded-lg'>
            <CoreBackButton />
            <CoreBreadcrumb />
          </div>
        </div>

        <div className='p-4 flex-1 overflow-auto'>{children}</div>
      </div>
    </div>
  );
};

export default NavProvider;
