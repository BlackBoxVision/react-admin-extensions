import React from "react";
import { AppBar } from "react-admin";
import { Typography } from "@material-ui/core";

import { useStyles } from "./styles";

// TODO: improve typings
export type HeaderProps = {
  logo?: string
  logoStyle?: any
};

export const Header: React.FC<HeaderProps> = ({ logo, logoStyle, ...props }) => {
  const styles = useStyles();

  return (
    <AppBar {...props}>
      <Typography
        variant="h6"
        color="inherit"
        id="react-admin-title"
        className={styles.title}
      />
      {logo ? <img src={logo} alt="logo" style={logoStyle} /> : null}
    </AppBar>
  );
};

Header.displayName = "Header";

Header.defaultProps = {};
