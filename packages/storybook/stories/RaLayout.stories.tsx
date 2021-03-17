import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { Admin, Resource, ListGuesser } from "react-admin";

import { Layout } from "@blackbox-vision/ra-layout";

import { items } from "../src/menu";

import { authProvider } from "../src/authProvider";
import { dataProvider } from "../src/dataProvider";

const Template = () => {
  return (
    <ThemeProvider theme={createMuiTheme()}>
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        layout={(props: any) => <Layout {...props} items={items} />}
      >
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});

export default {
  title: "Packages/RA Layout",
  component: Layout,
};
