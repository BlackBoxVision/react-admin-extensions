import React from "react";

export type Permission = {
  resource: string;
  action: string;
  fields?: string[];
};

export type CanActivateFunction = (
  permissions: Permission[] | any,
  resource: string,
  action: string,
  field?: string
) => boolean;

export type ReducedCanActivateFunction = (
  resource: string,
  action: string,
  field?: string
) => boolean;

export const RbacContext = React.createContext<CanActivateFunction>(null);
