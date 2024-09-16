'use client';

import MainNav from '@/components/navigations/MainNav';
import SideNav from '@/components/navigations/SideNav';
import { FunctionComponent, ReactNode, useState } from 'react';

interface NavProviderProps {
  children: ReactNode;
}

const NavProvider: FunctionComponent<NavProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='flex h-screen'>
      <div className={`${isOpen ? 'w-60' : 'w-20'}`}>
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className='flex-1 flex flex-col h-full'>
        <div className='h-14'>
          <MainNav isOpen={isOpen} />
        </div>

        <div className='p-4 flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default NavProvider;
