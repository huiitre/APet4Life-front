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
