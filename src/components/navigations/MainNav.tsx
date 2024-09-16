import { FunctionComponent } from 'react';
import { cn } from '@/lib/utils';
import CoreThemeSwitcher from '@/components/core/CoreThemeSwitcher';

interface MainNavProps {
  isOpen: boolean;
}

const MainNav: FunctionComponent<MainNavProps> = ({ isOpen }) => {
  return (
    <div
      className={cn(
        'w-full flex items-center gap-4 p-2 fixed top-0 left-0 transition-all shadow-md bg-background',
        isOpen ? 'pl-60' : 'pl-20'
      )}
    >
      <CoreThemeSwitcher />
    </div>
  );
};

export default MainNav;
