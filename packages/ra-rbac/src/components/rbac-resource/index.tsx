import React from "react";
import { Resource, ResourceProps } from "react-admin";

import { useGetCanActivate } from "../../hooks/use-get-can-activate";

export const RbacResource: React.FC<ResourceProps> = ({
  name,
  list,
  edit,
  show,
  create,
  options,
}) => {
  const { canActivate, loaded } = useGetCanActivate();

  if (!loaded) {
    return null;
  }

  return (
    <Resource
      create={canActivate(name, "create") && create}
      edit={canActivate(name, "edit") && edit}
      show={canActivate(name, "show") && show}
      list={canActivate(name, "list") && list}
      options={options}
      name={name}
    />
  );
};

RbacResource.displayName = "RbacResource";
