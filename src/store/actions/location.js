/* eslint-disable max-len */
/* eslint-disable spaced-comment */

//todo Action qui récupère la liste des régions depuis l'api gouv
//* ACTION TYPE LOAD_REGIONS_FROM_API
export const LOAD_REGIONS_FROM_API = 'LOAD_REGIONS_FROM_API';
//* ACTION CREATOR loadRegionsFromApi
export const loadRegionsFromApi = () => ({
  type: LOAD_REGIONS_FROM_API,
});

//todo Action qui récupère la liste des départements depuis l'api
//* ACTION TYPE LOAD_DEPTS_FROM_API
export const LOAD_DEPTS_FROM_API = 'LOAD_DEPTS_FROM_API';
//* ACTION CREATOR loadDeptsFromApi
export const loadDeptsFromApi = () => ({
  type: LOAD_DEPTS_FROM_API,
});

//todo Action qui insère la liste des régions récupérés dans le store
//* ACTION TYPE INSERT_REGIONS_TO_STATE
export const INSERT_REGIONS_TO_STATE = 'INSERT_REGIONS_TO_STATE';
//* ACTION CREATOR insertRegionsToState
export const insertRegionsToState = (regionsList) => ({
  type: INSERT_REGIONS_TO_STATE,
  regionsList,
});

//todo Action qui insère la liste des départements récupérés dans le store
//* ACTION TYPE INSERT_DEPTS_TO_STATE
export const INSERT_DEPTS_TO_STATE = 'INSERT_DEPTS_TO_STATE';
//* ACTION CREATOR insertDeptsToState
export const insertDeptsToState = (deptsList) => ({
  type: INSERT_DEPTS_TO_STATE,
  deptsList,
});
