import get from "lodash.get";
import isEqual from "lodash.isequal";
import {
  useGetMany,
  useGetManyReference,
  useNotify,
  usePaginationState,
  useResourceContext,
  useSafeSetState,
  useSelectionState,
  useSortState,
  removeEmpty,
  Record,
  RecordMap,
  SortPayload,
} from "ra-core";
import { useCallback, useEffect, useRef } from "react";

interface Options {
  basePath?: string;
  data?: RecordMap;
  filter?: any;
  ids?: any[];
  loaded?: boolean;
  page?: number;
  perPage?: number;
  record?: Record;
  reference: string;
  resource: string;
  sort?: SortPayload;
  source?: string;
  target: string;
  total?: number;
  through?: string;
  using?: string;
}

const defaultFilter = {};

export const useReferenceManyToManyFieldController = (props: Options) => {
  const {
    through,
    using = `${props.resource}_id,${props.reference}_id`,
    reference,
    record,
    filter = defaultFilter,
    source,
    basePath,
    page: initialPage,
    perPage: initialPerPage,
    sort: initialSort = { field: "id", order: "DESC" },
  } = props;

  const resource = useResourceContext(props);
  const notify = useNotify();

  // pagination logic
  const { page, setPage, perPage, setPerPage } = usePaginationState({
    page: initialPage,
    perPage: initialPerPage,
  });

  // sort logic
  const { sort, setSort: setSortObject } = useSortState(initialSort);
  const setSort = useCallback(
    (field: string, order: string = "ASC") => {
      setSortObject({ field, order });
      setPage(1);
    },
    [setPage, setSortObject]
  );

  // selection logic
  const { selectedIds, onSelect, onToggleItem, onUnselectItems } =
    useSelectionState();

  // filter logic
  const filterRef = useRef(filter);

  const [displayedFilters, setDisplayedFilters] = useSafeSetState<{
    [key: string]: boolean;
  }>({});

  const [filterValues, setFilterValues] =
    useSafeSetState<{
      [key: string]: any;
    }>(filter);

  const hideFilter = useCallback(
    (filterName: string) => {
      setDisplayedFilters((previousState) => {
        const { [filterName]: _, ...newState } = previousState;
        return newState;
      });
      setFilterValues((previousState) => {
        const { [filterName]: _, ...newState } = previousState;
        return newState;
      });
    },
    [setDisplayedFilters, setFilterValues]
  );

  const showFilter = useCallback(
    (filterName: string, defaultValue: any) => {
      setDisplayedFilters((previousState) => ({
        ...previousState,
        [filterName]: true,
      }));
      setFilterValues((previousState) => ({
        ...previousState,
        [filterName]: defaultValue,
      }));
    },
    [setDisplayedFilters, setFilterValues]
  );

  const setFilters = useCallback(
    (filters, displayedFilters) => {
      setFilterValues(removeEmpty(filters));
      setDisplayedFilters(displayedFilters);
      setPage(1);
    },
    [setDisplayedFilters, setFilterValues, setPage]
  );

  // handle filter prop change
  useEffect(() => {
    if (!isEqual(filter, filterRef.current)) {
      filterRef.current = filter;
      setFilterValues(filter);
    }
  });

  const [target] = using.split(",");
  const referenceId = get(record, source);
  const { ids } = useGetManyReference(
    through,
    target,
    referenceId,
    { page, perPage },
    sort,
    filterValues,
    resource,
    {
      onFailure: (error) =>
        notify(
          typeof error === "string"
            ? error
            : error.message || "ra.notification.http_error",
          "warning",
          {
            _:
              typeof error === "string"
                ? error
                : error && error.message
                ? error.message
                : undefined,
          }
        ),
    }
  );

  const { data, error, loaded, loading } = useGetMany(reference, ids, {
    enabled: Array.isArray(ids) && ids.length > 0,
  });

  return {
    basePath: basePath
      ? basePath.replace(resource, reference)
      : `/${reference}`,
    currentSort: sort,
    data,
    defaultTitle: null,
    displayedFilters,
    error,
    filterValues,
    hasCreate: false,
    hideFilter,
    ids,
    loaded,
    loading,
    onSelect,
    onToggleItem,
    onUnselectItems,
    page,
    perPage,
    resource: reference,
    selectedIds,
    setFilters,
    setPage,
    setPerPage,
    setSort,
    showFilter,
    total: data && data.length,
  };
};
