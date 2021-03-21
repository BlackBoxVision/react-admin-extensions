import React from "react";

import { useIsListOrShow } from "../../hooks/use-is-list-or-show";
import { useGetCanActivate } from "../../hooks/use-get-can-activate";

export type RbacFieldProps = {
  component: any;
  [key: string]: any;
};

export const RbacField: React.FC<RbacFieldProps> = ({
  component: Field,
  resource,
  source,
  ...props
}) => {
  const { loaded, canActivate } = useGetCanActivate();
  const { action } = useIsListOrShow();

  if (!loaded && !canActivate) {
    return null;
  }

  if (!source) {
    return (
      <Field
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
      <Field
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

RbacField.displayName = "RbacField";
