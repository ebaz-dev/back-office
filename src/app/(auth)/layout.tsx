import { FunctionComponent, ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='grid grid-cols-2 h-screen'>
      <div className='bg-primary'></div>

      <div className='flex items-center justify-center'>{children}</div>
    </div>
  );
};

export default AuthLayout;
