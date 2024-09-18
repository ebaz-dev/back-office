import SettingsUserInfo from '@/components/settings/SettingsUserInfo';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
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

      <Card className='flex-1 h-full'>
        <CardHeader>Tохиргоо</CardHeader>
        <CardBody>{children}</CardBody>
      </Card>
    </div>
  );
};

export default SettingsLayout;
