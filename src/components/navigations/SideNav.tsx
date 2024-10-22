import { FunctionComponent } from 'react';
import { MenuList } from '@/config';
import Link from 'next/link';
import { cn, tr } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Button } from '@nextui-org/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import CoreSvgIcon from '@/components/core/CoreSvgIcon';
import CoreImage from '@/components/core/CoreImage';
import { ICustomer } from '@/lib/types';

interface SideNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  chosenSupplier: ICustomer;
}

const SideNav: FunctionComponent<SideNavProps> = props => {
  const { isOpen, setIsOpen, chosenSupplier } = props;

  const pathname = usePathname();

  return (
    <div
      className={cn(
        'fixed top-0 left-0 bottom-0 transition-all z-50 bg-background flex flex-col gap-4',
        isOpen ? 'w-60' : 'w-20'
      )}
    >
      <Button
        className='rounded-full absolute -right-4 top-16 z-50'
        isIconOnly
        onClick={() => setIsOpen(!isOpen)}
        variant='flat'
        size='sm'
      >
        {isOpen ? (
          <ChevronLeftIcon className='w-4 h-4' />
        ) : (
          <ChevronRightIcon className='w-4 h-4' />
        )}
      </Button>

      <div className='flex items-center justify-center w-full h-14'>
        <CoreImage
          src={isOpen ? '/logos/logo-ebazaar.svg' : '/logos/logo-admin.svg'}
        />
      </div>

      <div className='relative w-full flex-1 flex flex-col px-3.5 gap-4 shadow-lg'>
        <div className='text-xs w-full text-center'>{tr('Цэс')}</div>

        <div className='flex-1 w-full flex-col flex gap-2'>
          {MenuList.map((menu, index: number) => {
            const isActive = pathname.startsWith(menu.pathname);

            return (
              <Button
                key={index}
                as={Link}
                href={`${menu.pathname}?supplierId=${
                  chosenSupplier ? chosenSupplier.id : ''
                }&page=1&limit=10`}
                color={isActive ? 'primary' : 'default'}
                size='sm'
                fullWidth
                className={`min-w-full ${
                  isOpen ? 'justify-start' : 'justify-center'
                }`}
                variant={isActive ? 'solid' : 'ghost'}
                isIconOnly={!isOpen}
                startContent={
                  <CoreSvgIcon
                    src={`/menu/${menu.icon}.svg`}
                    className={`${isActive && 'bg-white'}`}
                  />
                }
              >
                {isOpen && tr(menu.label)}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
