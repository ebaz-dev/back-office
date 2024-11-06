import NavProvider from '@/providers/NavProvider';
import { FunctionComponent, ReactNode } from 'react';
import { getCookie } from '@/app/actions/cookies';
import { SessionProvider } from 'next-auth/react';
import { getSuppliers } from '@/services/customer.service';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = async ({ children }) => {
  const chosenSupplier = await getCookie('supplier');
  const suppliers = await getSuppliers();

  return (
    <SessionProvider>
      <NavProvider
        suppliers={suppliers?.data ?? []}
        chosenSupplier={chosenSupplier ? JSON.parse(chosenSupplier) : null}
      >
        {children}
      </NavProvider>
    </SessionProvider>
  );
};

export default MainLayout;
