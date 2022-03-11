//* ACTION TYPE SET_REGION
export const SET_REGION = 'SET_REGION';
//* ACTION CREATOR setRegion
export const setRegion = (region) => ({
  type: SET_REGION,
  region,
});

//* ACTION TYPE SET_DEPARTMENT
export const SET_DEPARTMENT = 'SET_DEPARTMENT';
//* ACTION CREATOR setDepartment
export const setDepartment = (department) => ({
  type: SET_DEPARTMENT,
  department,
});

//* ACTION TYPE SET_ZIPCODE
export const SET_ZIPCODE = 'SET_ZIPCODE';
//* ACTION CREATOR setZipcode
export const setZipcode = (value, name) => ({
  type: SET_ZIPCODE,
  value,
  name,
});

// ACTION TYPE SEND_SEARCH_QUERY_BY_ZIPCODE
export const SEND_SEARCH_QUERY_BY_ZIPCODE = 'SEND_SEARCH_QUERY_BY_ZIPCODE';
// ACTION CREATOR sendSearchQueryByZipcode
export const sendSearchQueryByZipcode = (zipcode) => ({
  type: SEND_SEARCH_QUERY_BY_ZIPCODE,
  zipcode,
});

// ACTION TYPE SEND_SEARCH_QUERY_BY_REGION
export const SEND_SEARCH_QUERY_BY_REGION = 'SEND_SEARCH_QUERY_BY_REGION';
// ACTION CREATOR sendSearchQueryByRegion
export const sendSearchQueryByRegion = (region) => ({
  type: SEND_SEARCH_QUERY_BY_REGION,
  region,
});

// ACTION TYPE SEND_SEARCH_QUERY_BY_DEPARTMENT
export const SEND_SEARCH_QUERY_BY_DEPARTMENT = 'SEND_SEARCH_QUERY_BY_DEPARTMENT';
// ACTION CREATOR sendSearchQueryByDepartment
export const sendSearchQueryByDepartment = (department) => ({
  type: SEND_SEARCH_QUERY_BY_DEPARTMENT,
  department,
});

// ACTION TYPE INSERT_SEARCH_RESULT_TO_STATE
export const INSERT_SEARCH_RESULT_TO_STATE = 'INSERT_SEARCH_RESULT_TO_STATE';
// ACTION CREATOR insertSearchResultToState
export const insertSearchResultToState = (assocList) => ({
  type: INSERT_SEARCH_RESULT_TO_STATE,
  assocList,
});

//* ACTION TYPE SET_LOADING_SPINNER
export const SET_LOADING_SPINNER = 'SET_LOADING_SPINNER';
//* ACTION CREATOR setLoadingSpinner
export const setLoadingSpinner = () => ({
  type: SET_LOADING_SPINNER,
});

//* ACTION TYPE SET_ALL_ASSOCIATIONS_FROM_API
export const SET_ALL_ASSOCIATIONS_FROM_API = 'SET_ALL_ASSOCIATIONS_FROM_API';
//* ACTION CREATOR setAllAssociationsFromApi
export const setAllAssociationsFromApi = () => ({
  type: SET_ALL_ASSOCIATIONS_FROM_API,
});

//* ACTION TYPE INSERT_ALL_ASSOCIATIONS_ON_STATE
export const INSERT_ALL_ASSOCIATIONS_ON_STATE = 'INSERT_ALL_ASSOCIATIONS_ON_STATE';
//* ACTION CREATOR insertAllAssociationsOnState
export const insertAllAssociationsOnState = (assocList) => ({
  type: INSERT_ALL_ASSOCIATIONS_ON_STATE,
  assocList,
});

//* ACTION TYPE LOAD_ASSOC_BY_SLUG
export const LOAD_ASSOC_BY_SLUG = 'LOAD_ASSOC_BY_SLUG';
//* ACTION CREATOR loadAssocBySlug
export const loadAssocBySlug = (slug) => ({
  type: LOAD_ASSOC_BY_SLUG,
  slug,
});

//* ACTION TYPE INSERT_ASSOC_BY_SLUG_ON_STATE
export const INSERT_ASSOC_BY_SLUG_ON_STATE = 'INSERT_ASSOC_BY_SLUG_ON_STATE';
//* ACTION CREATOR insertAssocBySlugOnState
export const insertAssocBySlugOnState = (currentAssoc) => ({
  type: INSERT_ASSOC_BY_SLUG_ON_STATE,
  currentAssoc,
});

//* ACTION TYPE SET_LOADING_SLUG
export const SET_LOADING_SLUG = 'SET_LOADING_SLUG';
//* ACTION CREATOR setLoadingSlug
export const setLoadingSlug = (bool) => ({
  type: SET_LOADING_SLUG,
  bool,
});
