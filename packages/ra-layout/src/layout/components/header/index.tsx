import React from "react";
import { AppBar } from "react-admin";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";

// TODO: improve typings
export type HeaderProps = {};

export const Header: React.FC<HeaderProps> = (props) => {
  const styles = useStyles();

  return (
    <AppBar {...props}>
      <Typography
        variant="h6"
        color="inherit"
        id="react-admin-title"
        className={styles.title}
      />
    </AppBar>
  );
};

Header.displayName = "Header";

Header.defaultProps = {};
