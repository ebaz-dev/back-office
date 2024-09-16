import NavProvider from '@/providers/NavProvider';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { FunctionComponent, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = async ({ children }) => {
  return (
    <NextAuthProvider>
      <NavProvider>{children}</NavProvider>
    </NextAuthProvider>
  );
};

export default MainLayout;
