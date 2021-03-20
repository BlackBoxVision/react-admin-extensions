import React from "react";
import { Resource, ResourceProps } from "react-admin";

import { useGetCanActivate } from "../../hooks/use-get-can-activate";

export const RbacResource: React.FC<ResourceProps> = ({
  name,
  list,
  edit,
  show,
  create,
  ...resourceProps
}) => {
  const { loaded, canActivate } = useGetCanActivate();

  if (!loaded && !canActivate) {
    return null;
  }

  return (
    <Resource
      {...resourceProps}
      create={canActivate(name, "create") && create}
      edit={canActivate(name, "edit") && edit}
      show={canActivate(name, "show") && show}
      list={canActivate(name, "list") && list}
      name={name}
    />
  );
};

RbacResource.displayName = "RbacResource";
