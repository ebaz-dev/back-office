import { getCustomers } from '@/lib/requests';
import NavProvider from '@/providers/NavProvider';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { FunctionComponent, ReactNode } from 'react';
import { getCookie } from '@/app/actions/cookies';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = async ({ children }) => {
  const chosenSupplier = await getCookie('supplier');

  const suppliers = await getCustomers('supplier');

  return (
    <NextAuthProvider>
      <NavProvider
        suppliers={suppliers?.data ?? []}
        chosenSupplier={chosenSupplier ? JSON.parse(chosenSupplier) : null}
      >
        {children}
      </NavProvider>
    </NextAuthProvider>
  );
};

export default MainLayout;
