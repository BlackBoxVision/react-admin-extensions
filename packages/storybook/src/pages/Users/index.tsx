import React from "react";

const properties = {
  list: React.lazy(() =>
    import(/* webpackChunkName: "Users.list" */ "./List")
  ),
  // create: React.lazy(() =>
  //   import(/* webpackChunkName: "Users.create" */ "./Create")
  // ),
  // edit: React.lazy(() => import(/* webpackChunkName: "Users.edit" */ "./Edit")),
  options: {},
};

export default properties;
