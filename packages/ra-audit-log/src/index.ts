import { AuthProvider, DataProvider, UserIdentity } from "react-admin";

export type AddEventsForMutationsOptions = {
  name: string;
  resources?: any[];
  shouldAudit?: (action: string, ...args) => boolean;
};

let defaultOptions: AddEventsForMutationsOptions = {
  name: "events",
};

let blackListedActions: string[] = [
  "getList",
  "getOne",
  "getMany",
  "getManyReference",
];

function isBlackListedAction(action: string): Boolean {
  return blackListedActions.includes(action);
}

async function createNewEvent(
  authProvider: AuthProvider,
  dataProvider: DataProvider,
  action: string,
  resource: string,
  params: any,
  options: AddEventsForMutationsOptions
): Promise<void> {
  let { resources, shouldAudit } = options;
  let canAudit = null;

  if (!!shouldAudit && !!resources) {
    console.warn(
      `[ra-audit-log] You can't use both "shouldAudit" and "resources" options at the same time. "shouldAudit" will be ignored.`
    );

    let resourceToAudit = resources?.find?.((auditResource) => {
      if (typeof auditResource === "string") {
        return auditResource === resource;
      }

      if (Array.isArray(auditResource)) {
        return auditResource?.[0] === resource;
      }
    });

    if (Array.isArray(resourceToAudit)) {
      canAudit = resourceToAudit?.[1]?.includes?.(action);
    } else {
      canAudit = !!resourceToAudit;
    }
  } else {
    canAudit = shouldAudit?.(action, resource, params);
  }

  if (!canAudit) {
    return;
  }

  try {
    let author: UserIdentity = await authProvider.getIdentity();

    await dataProvider.create(options.name, {
      data: {
        action,
        author,
        resource,
        date: new Date(),
        payload: JSON.stringify(params),
      },
    });
  } catch (err) {
    console.info(`[ra-audit-log] Error while creating new event: ${err}`);
  }
}

function enhanceWithEventTracking(
  authProvider: AuthProvider,
  dataProvider: DataProvider,
  action: string,
  options: AddEventsForMutationsOptions
): (resource: string, params: any) => Promise<any> {
  if (isBlackListedAction(action)) {
    return dataProvider?.[action];
  }

  return async function (resource: string, params: any) {
    let response = await dataProvider?.[action]?.(resource, params);
    let newParams = params;

    if (!params.id) {
      newParams = {
        ...params,
        id: response?.data?.id,
      };
    }

    await createNewEvent(
      authProvider,
      dataProvider,
      action,
      resource,
      newParams,
      options
    );

    return response;
  };
}

export function addEventsForMutations(
  dataProvider: DataProvider,
  authProvider: AuthProvider,
  options: AddEventsForMutationsOptions = defaultOptions
): DataProvider {
  return Object.keys(dataProvider).reduce((newDataProvider, action) => {
    newDataProvider[action] = enhanceWithEventTracking(
      authProvider,
      dataProvider,
      action,
      options
    );

    return newDataProvider;
  }, {}) as DataProvider;
}
