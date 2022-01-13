import clsx from "clsx";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import { MenuItemLink, useGetIdentity } from "react-admin";

import PersonOutlined from "@material-ui/icons/PersonOutlined";

import { useStyles } from "./styles";

// TODO: improve typings
export type UserProfileProps = {
  layoutStyles?: any;
};

// TODO: improve component
export const UserProfile: React.FC<UserProfileProps> = ({ layoutStyles }) => {
  const { loading, identity: user } = useGetIdentity();

  const styles = useStyles();

  if (!loading && !!user) {
    const firstLetters = user?.fullName
      ?.split(" ")
      .map((parts: any) => parts[0])
      .join("")
      .toUpperCase();

    return (
      <Tooltip title={user?.fullName} aria-label={user?.fullName}>
        <MenuItemLink
          leftIcon={
            <div className={styles.root}>
              {!!user && user.avatar && (
                <Avatar
                  src={user.avatar}
                  alt={user.fullName}
                  className={clsx(styles.small, layoutStyles.avatar)}
                />
              )}
              {(!user || (!!user && !user.avatar)) && (
                <Avatar alt={user?.fullName} className={clsx(styles.small, layoutStyles.avatar)}>
                  {firstLetters}
                </Avatar>
              )}
            </div>
          }
          primaryText={user?.fullName}
          className={clsx(styles.menuLink, layoutStyles.menuLink)}
          to="/"
          sidebarIsOpen
        />
      </Tooltip>
    );
  }

  return (
    <MenuItemLink
      to="/"
      primaryText="Cargando..."
      className={clsx(styles.menuLink, layoutStyles.menuLink)}
      leftIcon={<PersonOutlined />}
      sidebarIsOpen
    />
  );
};

UserProfile.displayName = "UserProfile";
