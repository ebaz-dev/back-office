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

  // TODO: fetch user roles

  const role = {
    role: "BACKOFFICE_ADMIN",
    permissions: {
      merchant: ["list", "create", "update", "delete", "show"],
      product: ["list", "create", "update", "delete", "show"],
      order: ["list", "create", "update", "delete", "show"],
    },
  };

  return (
    <SessionProvider>
      <StoreProvider role={role}>
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
