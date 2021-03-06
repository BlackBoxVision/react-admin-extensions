import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: "0.75rem",
  },
  menuLink: {
    // TODO: improve overrides
    minHeight: "56px !important",
    fontWeight: "bold",
    textTransform: "none",
  },
}));
