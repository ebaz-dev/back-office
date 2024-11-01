"use client";

import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";
import { initializeRole, IRoleState } from "@/lib/reducers/roleReducer";

interface StoreProviderProps {
  children: ReactNode;
  role?: IRoleState;
}

export function StoreProvider({ children, role }: StoreProviderProps) {
  const store = useMemo(() => {
    const storeInstance = makeStore();
    if (role) {
      storeInstance.dispatch(initializeRole(role));
    }
    return storeInstance;
  }, [role]);

  return <Provider store={store}>{children}</Provider>;
}
