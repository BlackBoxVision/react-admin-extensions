import { useContext } from "react";
import { CreateContext, EditContext } from "react-admin";

export const useIsCreateOrEdit = () => {
  const create = useContext(CreateContext);
  const edit = useContext(EditContext);

  if (!!create.resource) {
    return {
      action: "create",
    };
  }

  if (!!edit.resource) {
    return {
      action: "edit",
    };
  }

  return {
    action: null,
  };
};
