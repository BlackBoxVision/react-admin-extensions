import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: ({ isSidebarOpen }: any) => (isSidebarOpen ? 240 : 55),
  },
  bottomDivider: {
    marginTop: 16,
    marginBottom: 16,
  },
}));
