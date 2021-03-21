import React from "react";

import { useIsCreateOrEdit } from "../../hooks/use-is-create-or-edit";
import { useGetCanActivate } from "../../hooks/use-get-can-activate";

export type RbacInputProps = {
  component: any;
  [key: string]: any;
};

// TODO: review how to type this component
export const RbacInput: React.FC<RbacInputProps> = ({
  component: Input,
  resource,
  source,
  ...props
}) => {
  const { loaded, canActivate } = useGetCanActivate();
  const { action } = useIsCreateOrEdit();

  if (!loaded && !canActivate) {
    return null;
  }

  if (!source) {
    return (
      <Input
        {...{
          ...props,
          resource,
          source,
        }}
      />
    );
  }

  if (canActivate(resource, action, source)) {
    return (
      <Input
        {...{
          ...props,
          resource,
          source,
        }}
      />
    );
  }

  return null;
};

RbacInput.displayName = "RbacInput";
