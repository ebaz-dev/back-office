import { Avatar, Card, CardBody } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface SettingsUserInfoProps {}

const SettingsUserInfo: FunctionComponent<SettingsUserInfoProps> = () => {
  return (
    <Card className='w-80'>
      <CardBody className='items-center'>
        <Avatar size='lg' />
      </CardBody>
    </Card>
  );
};

export default SettingsUserInfo;
