import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";
import { Sidebar, MenuItemLink, useLogout } from "react-admin";

import LogoutIcon from "@material-ui/icons/PowerSettingsNewOutlined";

import { UserProfile as DefaultUserProfile } from "../user-profile";
import { useStyles } from "./styles";

export type SideDrawerProps = {
  UserProfile: any;
  layoutStyles: any;
  iconStyle: any;
  sidebarOpenWidth: number;
  sidebarClosedWidth: number;
};

export const SideDrawer: React.FC<SideDrawerProps> = ({
  children,
  UserProfile,
  layoutStyles,
  iconStyle,
  sidebarOpenWidth,
  sidebarClosedWidth,
}) => {
  const isSidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const logout: any = useLogout();

  const styles = useStyles();

  return (
    <Sidebar
      style={
        isSidebarOpen
          ? { width: sidebarOpenWidth }
          : { width: sidebarClosedWidth }
      }
      classes={
        {
          drawerPaper: clsx({
            [layoutStyles.sidebarWhenOpen]: !!layoutStyles.sidebarWhenOpen,
            [layoutStyles.sidebarWhenClosed]: !!layoutStyles.sidebarWhenClosed,
          }),
        } as any
      }
      PaperProps={{
        className: clsx({
          [layoutStyles.sidebarWhenOpen]: !!layoutStyles.sidebarWhenOpen,
          [layoutStyles.sidebarWhenClosed]: !!layoutStyles.sidebarWhenClosed,
        }),
        elevation: 2,
      }}
    >
      <>
        <UserProfile layoutStyles={layoutStyles} />
        <Divider />
        {children}
        <Divider />
        <MenuItemLink
          id="logout"
          to="/login"
          onClick={logout}
          leftIcon={<LogoutIcon style={iconStyle} />}
          className={clsx(
            styles.listItem,
            layoutStyles.listItem,
            layoutStyles.logoutButton
          )}
          primaryText="Cerrar Sesión"
          sidebarIsOpen={isSidebarOpen}
        />
      </>
    </Sidebar>
  );
};

SideDrawer.displayName = "SideDrawer";

SideDrawer.defaultProps = {
  UserProfile: DefaultUserProfile,
};
