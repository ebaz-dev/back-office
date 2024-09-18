import { tr } from '@/lib/utils';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface SettingsBoardProps {}

const SettingsBoard: FunctionComponent<SettingsBoardProps> = () => {
  return (
    <Card className='h-full'>
      <CardHeader>{tr('Тохиргоо')}</CardHeader>
      <CardBody></CardBody>
    </Card>
  );
};

export default SettingsBoard;
