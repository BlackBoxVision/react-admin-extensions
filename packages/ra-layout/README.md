# RA Layout [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) 

Revamped React Admin UI.

## Install

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/ra-layout
```

### YARN

```bash
yarn add @blackbox-vision/ra-layout
```

## Use case

You're tired of the defacto React Admin UI and want to renew the look and feel. 

## Usage

The usage is really simple:

1. Define your menu as a JSON structure like the following:

```typescript
// menu.ts
import {
  LocalAtm,
  PermContactCalendar,
} from '@material-ui/icons';

export const items = [{
  type: 'group',
  label: 'Architects',
  items: [
    {
      type: 'resource',
      name: 'architects',
      label: 'Information',
      icon: PermContactCalendar,
    },
    {
      type: 'resource',
      name: 'commissions',
      label: 'Commissions',
      icon: LocalAtm,
    },
  ],
}]
```

2. Import `Layout` pass props to it and you're ready:

```typescript
// App.tsx
import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { Layout } from '@blackbox-vision/ra-layout';

import { items } from './menu';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export const App = () => {
  return (
    <Admin 
      dataProvider={dataProvider}
      layout={props => <Layout {...props} items={items} />}
    >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

App.displayName = "App";
```

## Props

`Layout` has the following props:

| Properties | Types   | Default Value | Description                                     |
| ---------- | ------- | ------------- | ----------------------------------------------- |
| items      | Array   | []            | The menu items to render           |

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-admin-extensions/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/LICENSE) for more information.
