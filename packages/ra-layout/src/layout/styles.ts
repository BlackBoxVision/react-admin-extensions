import { makeStyles } from "@material-ui/core/styles";

// TODO: add support to configure appBarHeight, sidebarMinWidth, sidebarMaxWidth
export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1000,
    display: "flex",
    minHeight: "100vh",
    position: "relative",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default,
  },
  container: {
    display: "flex",
    overflowX: "auto",
    flexDirection: "column",
    height: "calc(100vh - 56px)",
  },
  appBar: {
    height: 56,
  },
  appBarWhenSidebarOpen: {
    width: "calc(100% - 240px)",
  },
  appBarWhenSidebarClosed: {
    width: "calc(100% - 55px)",
  },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1,
  },
  content: {
    flexGrow: 2,
    display: "flex",
    marginTop: "3em",
    flexDirection: "column",
    padding: theme.spacing(3),
  },
  contentWhenSidebarOpen: {
    paddingLeft: "calc(240px + 24px)",
  },
  contentWhenSidebarClosed: {
    paddingLeft: "calc(55px + 24px)",
  },
}));
