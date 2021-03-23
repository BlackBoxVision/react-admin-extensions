import React from "react";

export type ReferenceManyToManyInputProps = {
  reference: string;
  through: string;
  using?: string;
  source?: string;
  sort?: any;
  filter?: any;
};

export const ReferenceManyToManyInput: React.FC<ReferenceManyToManyInputProps> = ({
  reference,
  through,
  using,
  source,
  sort,
  filter,
  children,
}) => {
  return null;
};

ReferenceManyToManyInput.displayName = "ReferenceManyToManyInput";
