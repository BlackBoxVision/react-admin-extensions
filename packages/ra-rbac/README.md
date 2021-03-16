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

1. Define your `createCanActivate` function like the following:

```typescript
// createCanActivate.ts
import { Permission } from '@blackbox-vision/ra-rbac';

// Your can activate logic
export const createCanActivate = (permissions: Permission[]) => (resource: string, action: string, fields?: string[]) => {
  if (Array.isArray(fields)) {
    return fields.reduce((acc, field) => ({
      ...acc,
      [field]: true
    }), {})
  }

  return true;
}
```

2. Import `RbacProvider` and `RbacResource` and wrap your `React Admin` with it:

```typescript
// App.tsx
import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { RbacProvider, RbacResource as Resource } from '@blackbox-vision/ra-rbac';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const App = () => {
  return (
    <RbacProvider createCanActivate={createCanActivate}>
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

| Properties | Types   | Default Value | Description                                     |
| ---------- | ------- | ------------- | ----------------------------------------------- |
| createCanActivate      | Function   | () => () => true            | The menu items to render           |

### RbacResource

`RbacResource` has the same props as `RA Resource`.

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-admin-extensions/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/LICENSE) for more information.
