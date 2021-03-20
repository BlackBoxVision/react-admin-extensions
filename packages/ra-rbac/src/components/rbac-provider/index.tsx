import React from "react";

import { RbacContext, CanActivateFunction } from "../../contexts/rbac";

export type RbacProviderProps = {
  canActivate?: CanActivateFunction;
};

export const RbacProvider: React.FC<RbacProviderProps> = ({
  canActivate,
  children,
}) => {
  return (
    <RbacContext.Provider value={canActivate}>{children}</RbacContext.Provider>
  );
};

RbacProvider.displayName = "RbacProvider";
RbacProvider.defaultProps = {
  // This let's any route pass by setting canActivate return value to true
  canActivate: (p, r, a, f) => true,
};
