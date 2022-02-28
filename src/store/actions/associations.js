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
