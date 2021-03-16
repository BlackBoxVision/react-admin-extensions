import { usePermissions } from "react-admin";
import { useContext, useEffect, useState } from "react";

import { CanActivateFunction, RbacContext } from "../contexts/rbac";

export type UseGetCanActivateReturn = {
  canActivate: CanActivateFunction | null;
  loaded: boolean;
};

export const useGetCanActivate = (): UseGetCanActivateReturn => {
  const createCanActivate = useContext(RbacContext);
  const [canActivate, setCanActivate] = useState<CanActivateFunction | null>(
    null
  );

  const { permissions, loaded } = usePermissions();

  useEffect(() => {
    if (loaded) {
      setCanActivate(createCanActivate(permissions));
    }
  }, [permissions, loaded]);

  return {
    canActivate,
    loaded,
  };
};
