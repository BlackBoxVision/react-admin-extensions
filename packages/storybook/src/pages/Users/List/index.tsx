import React from "react";
import { List, Datagrid, TextField, DateField, EmailField } from "react-admin";

const ListUsers = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="show">
        <TextField source="fullname" />
        <DateField source="created_at" />
        <EmailField source="email" target="_blank" rel="noopener noreferrer" />
      </Datagrid>
    </List>
  );
};

ListUsers.displayName = "ListUsers";

export default ListUsers;
