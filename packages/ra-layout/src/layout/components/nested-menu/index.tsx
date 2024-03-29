import qs from "qs";
import clsx from "clsx";
import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { MenuItemLink } from "react-admin";

import DefaultIcon from "@material-ui/icons/ViewList";

import { CollapsibleMenu } from "../collapsible-menu";

import { useStyles } from "./styles";

// TODO: improve typings
export type NestedMenuProps = {
  items: any[];
  layoutStyles: any;
  iconStyle: any;
};

export const NestedMenu: React.FC<NestedMenuProps> = React.memo(
  ({ items = [], layoutStyles, iconStyle }) => {
    const isSidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);

    const styles = useStyles();

    const renderItems = useCallback(
      ({ type, name, search, label, filter, icon: Icon, items: subItems }) => {
        if (type === "group") {
          return (
            <CollapsibleMenu
              key={`Menu.${type}.${label}`}
              label={label || name}
              isSidebarOpen={isSidebarOpen}
              layoutStyles={layoutStyles}
              iconStyle={iconStyle}
            >
              {subItems.map(renderItems)}
            </CollapsibleMenu>
          );
        }

        return (
          <MenuItemLink
            className={clsx(styles.listItem, layoutStyles.listItem)}
            key={`Item.${type}.${label}`}
            to={{
              pathname: `/${name}`,
              search: qs.stringify({
                ...search,
                filter: JSON.stringify(filter),
              }),
            }}
            primaryText={label || name}
            sidebarIsOpen={isSidebarOpen}
            leftIcon={
              Icon ? (
                <Icon style={iconStyle} />
              ) : (
                <DefaultIcon style={iconStyle} />
              )
            }
          />
        );
      },
      [isSidebarOpen]
    );

    return <div id="menu">{items.map(renderItems)}</div>;
  }
);

NestedMenu.displayName = "NestedMenu";
