import React from "react";

export type Permission = {
  resource: string;
  action: string;
  fields: string[];
};

export type CanActivateFunction = (
  resource: string,
  action: string,
  fields?: string[]
) => Boolean | any;

export type CreateCanActivateFunction = (
  permissions: Permission[]
) => CanActivateFunction;

export const RbacContext = React.createContext<CreateCanActivateFunction>(null);
