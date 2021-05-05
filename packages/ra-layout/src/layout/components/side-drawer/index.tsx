import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";
import { Sidebar, MenuItemLink, useLogout } from "react-admin";

import LogoutIcon from "@material-ui/icons/PowerSettingsNewOutlined";

import { UserProfile as DefaultUserProfile } from "../user-profile";
import { useStyles } from "./styles";

export type SideDrawerProps = {
  UserProfile: any
};

export const SideDrawer: React.FC<SideDrawerProps> = ({ children, UserProfile }) => {
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
        <Divider />
        <MenuItemLink
          id="logout"
          to="/login"
          onClick={logout}
          leftIcon={<LogoutIcon />}
          className={styles.listItem}
          primaryText="Cerrar Sesión"
          sidebarIsOpen={isSidebarOpen}
        />
      </>
    </Sidebar>
  );
};

SideDrawer.displayName = "SideDrawer";

SideDrawer.defaultProps = {
  UserProfile: DefaultUserProfile
};
