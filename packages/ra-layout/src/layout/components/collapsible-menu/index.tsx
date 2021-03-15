import React, { useState } from "react";
import List from "@material-ui/core/List";
import Tooltip from "@material-ui/core/Tooltip";
import MenuItem from "@material-ui/core/MenuItem";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";

import { useStyles } from "./styles";

export type CollapsibleMenuProps = {
  label: string;
  isSidebarOpen: boolean;
  children: React.ReactElement[];
};

export const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  isSidebarOpen,
  children,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const styles = useStyles({
    isSidebarOpen,
  });

  const MenuItemContainer = ({ children }) => {
    if (isSidebarOpen || isOpen) {
      return children;
    }

    return (
      <Tooltip title={label} placement="right">
        {children}
      </Tooltip>
    );
  };

  return (
    <>
      <MenuItemContainer>
        <MenuItem button onClick={() => setIsOpen(!isOpen)}>
          <ListItemIcon className={styles.icon}>
            {isOpen ? <ExpandMore /> : <ChevronRight />}
          </ListItemIcon>
          <Typography variant="inherit" color="textSecondary">
            {label}
          </Typography>
        </MenuItem>
      </MenuItemContainer>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className={styles.list}>
          {children}
        </List>
      </Collapse>
    </>
  );
};

CollapsibleMenu.displayName = "CollapsibleMenu";
