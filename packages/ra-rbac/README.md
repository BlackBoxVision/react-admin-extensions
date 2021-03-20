# RA RBAC [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

Role based Access Control for `React Admin`.

## Install

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/ra-rbac
```

### YARN

```bash
yarn add @blackbox-vision/ra-rbac
```

## Use case

You need to have fine grained permissions over your `React Admin` app.

## Usage

The usage is really simple:

1. Define your `canActivate` function like the following:

```typescript
// canActivate.ts
import { Permission } from "@blackbox-vision/ra-rbac";

export const canActivate = (
  permissions: Permission[] | any,
  resource: string,
  action: string,
  field?: string
) => {
  // Your can activate logic
  return true;
};
```

2. Import `RbacProvider` and `RbacResource` and wrap your `React Admin` with it:

```typescript
// App.tsx
import React from "react";
import { Admin } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import {
  RbacProvider,
  RbacResource as Resource,
} from "@blackbox-vision/ra-rbac";

import { canActivate } from "./canActivate";

export const App = () => {
  const dataProvider = jsonServerProvider(
    "https://jsonplaceholder.typicode.com"
  );

  return (
    <RbacProvider canActivate={canActivate}>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
      </Admin>
    </RbacProvider>
  );
};

App.displayName = "App";
```

## Props

### RbacProvider

`RbacProvider` has the following props:

| Properties    | Types      | Default Value          | Description                                                                           |
| ------------- | ---------- | ---------------------- | ------------------------------------------------------------------------------------- |
| `canActivate` | `Function` | `(p, r, a, f) => true` | Logic to test if a user can perform an specific action or visualize an specific field |

### RbacResource

`RbacResource` has the same props as `RA Resource`.

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-admin-extensions/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/LICENSE) for more information.
