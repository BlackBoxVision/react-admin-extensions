import React from "react";

import { RbacContext, CreateCanActivateFunction } from "../../contexts/rbac";

export type RbacProviderProps = {
  createCanActivate: CreateCanActivateFunction;
};

export const RbacProvider: React.FC<RbacProviderProps> = ({
  createCanActivate,
  children,
}) => {
  return (
    <RbacContext.Provider value={createCanActivate}>
      {children}
    </RbacContext.Provider>
  );
};

RbacProvider.displayName = "RbacProvider";
RbacProvider.defaultProps = {
  // This let's any route pass by setting canActivate return value to true
  createCanActivate: (p) => (r, a, f) => true,
};
