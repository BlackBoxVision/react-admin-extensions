import React from "react";
import { Layout } from "@blackbox-vision/ra-layout";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "green",
  },
  container: {
    backgroundColor: "yellow",
  },
});

const MyLayout = (props) => {
  const classes = useStyles();

  return (
    <Layout
      {...props}
      layoutStyles={{ root: classes.root, container: classes.container }}
    />
  );
};

MyLayout.displayName = "MyLayout";

export default MyLayout;
