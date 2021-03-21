import { useContext } from "react";
import { ListContext, ShowContext } from "react-admin";

export const useIsListOrShow = () => {
  const list = useContext(ListContext);
  const show = useContext(ShowContext);

  if (!!list.resource) {
    return {
      action: "list",
    };
  }

  if (!!show.resource) {
    return {
      action: "show",
    };
  }

  return {
    action: null,
  };
};
