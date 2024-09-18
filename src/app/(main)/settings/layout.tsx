import SettingsUserInfo from '@/components/settings/SettingsUserInfo';
import { FunctionComponent, ReactNode } from 'react';

interface SettingsLayoutProps {
  children: ReactNode;
}

const SettingsLayout: FunctionComponent<SettingsLayoutProps> = ({
  children
}) => {
  return (
    <div className='flex gap-4 h-full'>
      <SettingsUserInfo />

      <div className='flex-1 h-full'>{children}</div>
    </div>
  );
};

export default SettingsLayout;
