import LoginForm from '@/components/auth/LoginForm';
import CoreImage from '@/components/core/CoreImage';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { FunctionComponent } from 'react';

interface LoginPageProps {}

const LoginPage: FunctionComponent<LoginPageProps> = () => {
  return (
    <Card className='w-96'>
      <CardHeader className='justify-center w-full h-20'>
        <CoreImage src='/logos/logo-ebazaar.svg' />
      </CardHeader>

      <CardBody>
        <LoginForm />
      </CardBody>
    </Card>
  );
};

export default LoginPage;
