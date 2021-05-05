import React from "react";
import { Layout } from "@blackbox-vision/ra-layout";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "lightgreen",
  },
  container: {
    backgroundColor: "lightyellow",
  },
  appBar: {
    backgroundColor: "lightblue",
  },
  sidebarWhenClosed: {
    backgroundColor: "violet",
  },
  sidebarWhenOpen: {
    backgroundColor: "violet",
  },
  listItem: {
    color: '#FFF'
  }
});

const MyLayout = (props) => {
  const classes = useStyles();

  return (
    <Layout
      {...props}
      iconStyle={{ color: '#FFF' }}
      layoutStyles={{
        root: classes.root,
        container: classes.container,
        appBar: classes.appBar,
        sidebarWhenClosed: classes.sidebarWhenClosed,
        sidebarWhenOpen: classes.sidebarWhenOpen,
        listItem: classes.listItem,
      }}
    />
  );
};

MyLayout.displayName = "MyLayout";

export default MyLayout;
