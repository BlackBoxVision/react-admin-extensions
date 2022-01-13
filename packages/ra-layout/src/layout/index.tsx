import clsx from "clsx";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Notification, setSidebarVisibility } from "react-admin";

import { Header } from "./components/header";
import { SideDrawer } from "./components/side-drawer";
import { NestedMenu } from "./components/nested-menu";

import { useStyles } from "./styles";

export type LayoutStylesProps = {
  /**
   * Styles applied to root container
   */
  root?: any;
  /**
   * Styles applied to second container
   */
  container?: any;
  /**
   * Styles applied to appBar
   */
  appBar?: any;
  /**
   * Styles applied to sidebar when is open
   */
  sidebarWhenOpen?: any;
  /**
   * Styles applied to sidebar when is closed
   */
  sidebarWhenClosed?: any;
  /**
   * Styles applied to menu list items
   */
  listItem?: any;
  /**
   * Styles applied to user profile menu link
   */
  menuLink?: any;
  /**
   * Styles applied to logout button
   */
  logoutButton?: any;
  /**
   * Styles applied to user profile avatar
   */
  avatar?: any
};

// TODO: improve typings
export type LayoutProps = {
  Menu?: any;
  AppBar?: any;
  Sidebar?: any;
  items: any[];
  title?: string;
  dashboard?: any;
  layoutStyles?: LayoutStylesProps;
  iconStyle?: any;
  sidebarOpenWidth?: number;
  sidebarClosedWidth?: number;
  sidebarElevation?: number
  showDividers?: boolean
  logo?: string
  logoStyle: any
};

export const Layout: React.FC<LayoutProps> = ({
  title,
  items,
  children,
  dashboard,
  AppBar = Header,
  Menu = NestedMenu,
  Sidebar = SideDrawer,
  layoutStyles,
  iconStyle,
  sidebarOpenWidth,
  sidebarClosedWidth,
  sidebarElevation = 2,
  showDividers = true,
  logo,
  logoStyle
}) => {
  const isSidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);
  const dispatch = useDispatch();

  const styles = useStyles();

  useEffect(() => {
    dispatch(setSidebarVisibility(true));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSidebarVisibility]);

  return (
    <div className={clsx(styles.root, layoutStyles.root)}>
      <div className={clsx(styles.container, layoutStyles.container)}>
        <AppBar
          title={title}
          open={isSidebarOpen}
          logo={logo}
          logoStyle={logoStyle}
          className={clsx({
            [styles.appBar]: true,
            [styles.appBarWhenSidebarOpen]: !!isSidebarOpen,
            [styles.appBarWhenSidebarClosed]: !isSidebarOpen,
            [layoutStyles.appBar]: !!layoutStyles.appBar,
          })}
        />
        <main className={styles.contentWithSidebar}>
          <Sidebar
            sidebarOpenWidth={sidebarOpenWidth}
            sidebarClosedWidth={sidebarClosedWidth}
            layoutStyles={layoutStyles}
            iconStyle={iconStyle}
            showDividers={showDividers}
            sidebarElevation={sidebarElevation}
          >
            <Menu
              items={items}
              dashboard={dashboard}
              layoutStyles={layoutStyles}
              iconStyle={iconStyle}
            />
          </Sidebar>
          <div
            className={clsx({
              [styles.content]: true,
            })}
          >
            {children}
          </div>
        </main>
        <Notification />
      </div>
    </div>
  );
};

Layout.displayName = "Layout";

Layout.defaultProps = {
  sidebarOpenWidth: 240,
  sidebarClosedWidth: 55,
  layoutStyles: {
    root: {},
    container: {},
    appBar: {},
    sidebarWhenOpen: {},
    sidebarWhenClosed: {},
    listItem: {},
    menuLink: {},
    logoutButton: {},
  },
};
