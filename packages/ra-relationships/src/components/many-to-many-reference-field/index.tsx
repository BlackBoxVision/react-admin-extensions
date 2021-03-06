import React from "react";
import {
  ResourceContextProvider,
  ListContextProvider,
  useRecordContext,
} from "react-admin";

import { useReferenceManyToManyFieldController } from "../../hooks/use-reference-many-to-many-field-controller";

import { ReferenceManyToManyFieldView } from "../many-to-many-reference-field-view";

export type ReferenceManyToManyFieldProps = {
  reference: string;
  through: string;
  using?: string;
  source?: string;
  page?: number;
  perPage?: number;
  pagination?: React.ReactElement;
  sort?: any;
  filter?: any;
  [key: string]: any;
};

const PureReferenceManyToManyFieldView = React.memo(
  ReferenceManyToManyFieldView
);

export const ReferenceManyToManyField: React.FC<ReferenceManyToManyFieldProps> = (
  props
) => {
  const {
    target,
    basePath,
    resource,
    reference,
    through,
    using,
    page,
    source,
    perPage,
    sort,
    filter,
    children,
  } = props;

  const record = useRecordContext(props);

  if (React.Children.count(children) !== 1) {
    throw new Error(
      "<ReferenceManyToManyField> only accepts a single child (like <Datagrid>)"
    );
  }

  const controllerProps: any = useReferenceManyToManyFieldController({
    basePath,
    filter,
    target,
    page,
    perPage,
    record,
    reference,
    resource,
    sort,
    source,
    through,
    using,
  });

  return (
    <ResourceContextProvider value={reference}>
      <ListContextProvider value={controllerProps}>
        <PureReferenceManyToManyFieldView {...props} {...controllerProps} />
      </ListContextProvider>
    </ResourceContextProvider>
  );
};

ReferenceManyToManyField.displayName = "ManyToManyReferenceField";
ReferenceManyToManyField.defaultProps = {
  source: "id",
  page: 1,
  perPage: 25,
};
