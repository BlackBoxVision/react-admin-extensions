import { ManyToManyContext } from "contexts/many-to-many";
import React from "react";

export type ManyToManyReferenceContextProviderProps = {};

export const ManyToManyReferenceContextProvider: React.FC<ManyToManyReferenceContextProviderProps> = ({
  children,
}) => {
  // TODO: define value to pass and logic
  return (
    <ManyToManyContext.Provider value={{}}>
      {children}
    </ManyToManyContext.Provider>
  );
};

ManyToManyReferenceContextProvider.displayName = "ManyToManyContextProvider";
