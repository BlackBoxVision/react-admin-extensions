import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  menuLink: {
    height: 56,
    fontWeight: "bold",
    textTransform: "none",
  },
}));
