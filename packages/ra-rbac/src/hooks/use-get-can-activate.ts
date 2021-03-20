import { useContext } from "react";
import { usePermissions } from "react-admin";

import { RbacContext, ReducedCanActivateFunction } from "../contexts/rbac";

export type UseGetCanActivateReturn = {
  canActivate: ReducedCanActivateFunction | null;
  loaded: boolean;
};

export const useGetCanActivate = (): UseGetCanActivateReturn => {
  const canActivate = useContext(RbacContext);

  const { loaded, permissions } = usePermissions();

  return {
    canActivate: !!permissions
      ? (resource: string, action: string, field?: string) =>
          canActivate(permissions, resource, action, field)
      : null,
    loaded: loaded && !!permissions,
  };
};
