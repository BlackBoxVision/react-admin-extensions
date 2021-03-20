import { usePermissions } from "react-admin";
import { useContext, useEffect, useState } from "react";

import { CanActivateFunction, RbacContext } from "../contexts/rbac";

export type UseGetCanActivateReturn = {
  canActivate: CanActivateFunction | null;
  loaded: boolean;
};

export const useGetCanActivate = (): UseGetCanActivateReturn => {
  const createCanActivate = useContext(RbacContext);

  const { loaded, permissions } = usePermissions();

  return {
    canActivate: !!permissions ? createCanActivate(permissions) : null,
    loaded: loaded && !!permissions,
  };
};
