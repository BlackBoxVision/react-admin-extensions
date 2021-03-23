import React from "react";
import {
  useListContext,
  LinearProgress,
  ListControllerProps,
  sanitizeFieldRestProps,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

import { ReferenceManyToManyFieldProps } from "../many-to-many-reference-field";

export type ReferenceManyToManyFieldViewProps = Omit<
  ReferenceManyToManyFieldProps,
  "basePath" | "resource" | "page" | "perPage"
> &
  ListControllerProps & {
    classes?: any;
  };

export const ReferenceManyToManyFieldView: React.FC<ReferenceManyToManyFieldViewProps> = (
  props
) => {
  const {
    children,
    pagination,
    className,
    resource,
    reference,
    ...rest
  } = props;

  const classes = useStyles(props);
  const { loaded } = useListContext(props);

  if (!loaded) {
    return <LinearProgress className={classes.progress} />;
  }

  return (
    <>
      {React.cloneElement(React.Children.only(children) as any, {
        ...sanitizeFieldRestProps(rest),
        className,
        resource,
      })}{" "}
      {pagination &&
        props.total !== undefined &&
        React.cloneElement(pagination, sanitizeFieldRestProps(rest))}
    </>
  );
};

ReferenceManyToManyFieldView.displayName = "ReferenceManyToManyFieldView";

const useStyles = makeStyles(
  (theme) => ({
    progress: {
      marginTop: theme.spacing(2),
    },
  }),
  {
    name: "RaReferenceManyToManyField",
  }
);
