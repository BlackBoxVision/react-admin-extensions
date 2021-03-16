import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sidebarWhenOpen: {
    width: 240,
  },
  sidebarWhenClosed: {
    width: 55,
  },
  bottomDivider: {
    marginTop: 16,
    marginBottom: 16,
  },
}));
