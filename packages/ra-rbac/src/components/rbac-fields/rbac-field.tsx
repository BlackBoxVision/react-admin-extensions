import React from "react";
import { FieldProps } from "react-admin";

import { useIsListOrShow } from "../../hooks/use-is-list-or-show";
import { useGetCanActivate } from "../../hooks/use-get-can-activate";

export type FieldComponent = React.FC<FieldProps>;
export type RbacFieldProps = FieldProps & {
  component: FieldComponent;
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
