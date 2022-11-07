# RA Audit Log [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

An audit log for `React Admin`.

## Install

You can install this library via NPM or YARN.

### NPM

```bash
npm i @blackbox-vision/ra-audit-log
```

### YARN

```bash
yarn add @blackbox-vision/ra-audit-log
```

## Use case

You need to track user events over your `React Admin` app.

## Usage

The usage is really simple:
 
Define your `dataProvider` function like the following:

```typescript
import { addEventsForMutations } from "@blackbox-vision/ra-audit-log";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";

const dataProvider = addEventsForMutations(
  simpleRestProvider("http://path.to.my.api/"),
  authProvider
);
```

The `addEventsForMutations` function accepts the following options:

- `name`: the name of the event logs resource (defaults to events)

```typescript
import { addEventsForMutations } from "@blackbox-vision/ra-audit-log";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";

const dataProvider = addEventsForMutations(
  simpleRestProvider("http://path.to.my.api/"),
  authProvider,
  { name: "events" }
);
```

- `resources`: the resources and mutations you want to track with events. It can be an array of resource names or an array of arrays defining both the resource and the dataProvider calls to track

```typescript
import { addEventsForMutations } from "@blackbox-vision/ra-audit-log";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";

const dataProvider = addEventsForMutations(
  simpleRestProvider("http://path.to.my.api/"),
  authProvider,
  {
    resources: [
      // create an event for all known mutations on posts
      "posts",
      // create an event only for create and update on comments, but not for delete, deleteMany or updateMany
      ["comments", ["create", "update"]],
    ],
  }
);
```

- `shouldAudit`: as an alternative to resources, you can specify a function which, given a dataProvider method name (create, update, etc.) and the arguments it was called with, should return true to create an event. This allows to target custom dataProvider methods:

```typescript
import { addEventsForMutations } from "@react-admin/ra-audit-log";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";

const dataProvider = addEventsForMutations(
  simpleRestProvider("http://path.to.my.api/"),
  authProvider,
  {
    shouldAudit: (action, ...args) => {
      if (action === "myCustomMethod") {
        return true;
      }
    },
  }
);
```

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/react-admin-extensions/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/react-admin-extensions/blob/master/LICENSE) for more information.
