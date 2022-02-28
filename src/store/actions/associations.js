//* ACTION TYPE SET_REGION
export const SET_REGION = 'SET_REGION';
//* ACTION CREATOR setRegion
export const setRegion = (region) => ({
  type: SET_REGION,
  region,
});

//* ACTION TYPE SET_DEPT
export const SET_DEPT = 'SET_DEPT';
//* ACTION CREATOR setDept
export const setDept = (dept) => ({
  type: SET_DEPT,
  dept,
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

// ACTION TYPE SEND_SEARCH_QUERY_BY_DEPT
export const SEND_SEARCH_QUERY_BY_DEPT = 'SEND_SEARCH_QUERY_BY_DEPT';

// ACTION CREATOR sendSearchQueryByDept
export const sendSearchQueryByDept = (dept) => ({
  type: SEND_SEARCH_QUERY_BY_DEPT,
  dept,
});
