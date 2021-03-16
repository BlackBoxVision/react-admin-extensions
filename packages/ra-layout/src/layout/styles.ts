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
    width: ({ isSideDrawerOpen }: any) =>
      isSideDrawerOpen ? "calc(100% - 240px)" : "calc(100% - 55px)",
  },
  contentWithSidebar: {
    display: "flex",
    flexGrow: 1,
  },
  sidebar: {
    width: ({ isSideDrawerOpen }: any) => (isSideDrawerOpen ? 240 : 55),
  },
  content: {
    flexGrow: 2,
    display: "flex",
    marginTop: "3em",
    flexDirection: "column",
    padding: theme.spacing(3),
    paddingLeft: ({ isSideDrawerOpen }: any) =>
      isSideDrawerOpen ? "calc(240px + 24px)" : "calc(55px + 24px)",
  },
}));
