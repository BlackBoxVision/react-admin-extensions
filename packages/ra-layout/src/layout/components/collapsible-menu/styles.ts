import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: theme.spacing(5),
  },
  list: ({ isSidebarOpen }: any) => ({
    "& a": {
      paddingLeft: theme.spacing(isSidebarOpen ? 4 : 2),
      transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    },
  }),
}));
