import React from "react";
import { useSelector } from "react-redux";
import Divider from "@material-ui/core/Divider";
import { Sidebar, MenuItemLink, useLogout } from "react-admin";

import LogoutIcon from "@material-ui/icons/PowerSettingsNewOutlined";

import { useStyles } from "./styles";
import { UserProfile } from "../user-profile";

export type SideDrawerProps = {
  isSidebarOpen?: boolean;
};

export const SideDrawer: React.FC<SideDrawerProps> = ({ children }) => {
  const isSidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const logout: any = useLogout();

  const styles = useStyles({
    isSidebarOpen,
  });

  return (
    <Sidebar
      classes={
        {
          drawerPaper: styles.sidebar,
        } as any
      }
      PaperProps={{
        className: styles.sidebar,
        elevation: 2,
      }}
    >
      <>
        <UserProfile />
        <Divider />
        {children}
        <Divider className={styles.bottomDivider} />
        <MenuItemLink
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
