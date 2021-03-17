import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";
import { Sidebar, MenuItemLink, useLogout } from "react-admin";

import LogoutIcon from "@material-ui/icons/PowerSettingsNewOutlined";

import { useStyles } from "./styles";
import { UserProfile } from "../user-profile";

export type SideDrawerProps = {};

export const SideDrawer: React.FC<SideDrawerProps> = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const logout: any = useLogout();

  const styles = useStyles();

  return (
    <Sidebar
      classes={
        {
          drawerPaper: clsx({
            [styles.sidebarWhenOpen]: !!isSidebarOpen,
            [styles.sidebarWhenClosed]: !isSidebarOpen,
          }),
        } as any
      }
      PaperProps={{
        className: clsx({
          [styles.sidebarWhenOpen]: !!isSidebarOpen,
          [styles.sidebarWhenClosed]: !isSidebarOpen,
        }),
        elevation: 2,
      }}
    >
      <>
        <UserProfile />
        <Divider />
        {children}
        <Divider className={styles.bottomDivider} />
        <MenuItemLink
          id="logout"
          to="/login"
          onClick={logout}
          leftIcon={<LogoutIcon />}
          primaryText="Cerrar Sesión"
          sidebarIsOpen={isSidebarOpen}
        />
      </>
    </Sidebar>
  );
};

SideDrawer.displayName = "SideDrawer";

SideDrawer.defaultProps = {};
