import React from "react";
import { InputProps } from "react-admin";

import { useIsCreateOrEdit } from "../../hooks/use-is-create-or-edit";
import { useGetCanActivate } from "../../hooks/use-get-can-activate";

export type InputComponent<T> = React.FC<T>;
export type RbacInputProps<T> = {
  component: InputComponent<T>;
  resource?: string;
  source?: string;
  [key: string]: any;
};

export const RbacInput: React.FC<RbacInputProps<any>> = ({
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
