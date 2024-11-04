import React, { ReactNode } from "react";
import { useAppSelector } from "@/lib/hooks";

type Permission = {
  resource: string;
  action: string;
};

type PermissionCompProps = {
  permissionToCheck: Permission;
  children: ReactNode;
};

const CoreCanAccess = (props: PermissionCompProps) => {
  const { children, permissionToCheck } = props;
  const { resource, action } = permissionToCheck;
  const userPermissions = useAppSelector((state) => state.role.permissions);

  const hasPermission =
    userPermissions[resource] && userPermissions[resource]?.includes(action);
  return <>{hasPermission ? children : null}</>;
};

export default CoreCanAccess;
