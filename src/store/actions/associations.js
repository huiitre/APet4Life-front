//* ACTION TYPE SET_REGION
export const SET_REGION = 'SET_REGION';
//* ACTION CREATOR setRegion
export const setRegion = (region, codeRegion) => ({
  type: SET_REGION,
  region,
  codeRegion,
});

//* ACTION TYPE SET_DEPT
export const SET_DEPT = 'SET_DEPT';
//* ACTION CREATOR setDept
export const setDept = (dept) => ({
  type: SET_DEPT,
  dept,
});

//* ACTION TYPE SET_ZIPCODE_FIELD_VALUE
export const SET_ZIPCODE_FIELD_VALUE = 'SET_ZIPCODE_FIELD_VALUE';
//* ACTION CREATOR setZipcodeFieldValue
export const setZipcodeFieldValue = (value, name) => ({
  type: SET_ZIPCODE_FIELD_VALUE,
  value,
  name,
});
