import { getCustomers } from "@/lib/requests";
import NavProvider from "@/providers/NavProvider";
import { FunctionComponent, ReactNode } from "react";
import { getCookie } from "@/app/actions/cookies";
import { SessionProvider } from "next-auth/react";
import { StoreProvider } from "@/providers/StoreProvider";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FunctionComponent<MainLayoutProps> = async ({ children }) => {
  const chosenSupplier = await getCookie("supplier");
  const suppliers = await getCustomers("type=supplier");

  return (
    <SessionProvider>
      <StoreProvider>
        <NavProvider
          suppliers={suppliers?.data ?? []}
          chosenSupplier={chosenSupplier ? JSON.parse(chosenSupplier) : null}
        >
          {children}
        </NavProvider>
      </StoreProvider>
    </SessionProvider>
  );
};

export default MainLayout;
