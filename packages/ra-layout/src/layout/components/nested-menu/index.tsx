import qs from "qs";
import React from "react";
import { useSelector } from "react-redux";
import { MenuItemLink } from "react-admin";

import DefaultIcon from "@material-ui/icons/ViewList";

import { CollapsibleMenu } from "../collapsible-menu";

import { useStyles } from "./styles";

// TODO: improve typings
export type NestedMenuProps = {
  items: any[];
};

export const NestedMenu: React.FC<NestedMenuProps> = ({ items = [] }) => {
  const isSidebarOpen = useSelector((state) => state.admin.ui.sidebarOpen);

  const styles = useStyles();

  const renderItems = ({
    type,
    name,
    label,
    filter,
    icon: Icon,
    items: subItems,
  }) => {
    if (type === "group") {
      return (
        <CollapsibleMenu
          key={`Menu.${name}`}
          label={label || name}
          isSidebarOpen={isSidebarOpen}
        >
          {subItems.map(renderItems)}
        </CollapsibleMenu>
      );
    }

    return (
      <MenuItemLink
        key={`Item.${name}`}
        to={{
          pathname: `/${name}`,
          search: qs.stringify({
            filter: JSON.stringify(filter),
          }),
        }}
        primaryText={label || name}
        sidebarIsOpen={isSidebarOpen}
        leftIcon={Icon ? <Icon /> : <DefaultIcon />}
      />
    );
  };

  return (
    <div id="menu" className={styles.list}>
      {items.map(renderItems)}
    </div>
  );
};

NestedMenu.displayName = "NestedMenu";
