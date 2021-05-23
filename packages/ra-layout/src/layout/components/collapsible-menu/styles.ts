import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    minWidth: theme.spacing(5),
  },
  listItem: {
    minHeight: "48px !important",
  },
  listWhenSidebarOpen: {
    "& a": {
      [theme.breakpoints.up("xs")]: {
        paddingLeft: theme.spacing(4),
        transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      },
    },
  },
  listWhenSidebarClosed: {
    "& a": {
      [theme.breakpoints.up("xs")]: {
        paddingLeft: theme.spacing(2),
        transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
      },
    },
  },
}));
