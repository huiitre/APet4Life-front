//* ACTION TYPE FORM_CONTACT_IS_OPEN
export const FORM_CONTACT_IS_OPEN = 'FORM_CONTACT_IS_OPEN';
//* ACTION CREATOR formContactIsOpen
export const formContactIsOpen = () => ({
  type: FORM_CONTACT_IS_OPEN,
});

//* ACTION TYPE SET_TYPE_SIGNUP_FORM
export const SET_TYPE_SIGNUP_FORM = 'SET_TYPE_SIGNUP_FORM';
//* ACTION CREATOR setTypeSignupForm
export const setTypeSignupForm = (userType) => ({
  type: SET_TYPE_SIGNUP_FORM,
  userType,
});

//* ACTION TYPE CHANGE_FORM_SIGNUP_STATUS
export const CHANGE_FORM_SIGNUP_STATUS = 'CHANGE_FORM_SIGNUP_STATUS';
//* ACTION CREATOR changeFormSignupStatus
export const changeFormSignupStatus = (status) => ({
  type: CHANGE_FORM_SIGNUP_STATUS,
  status,
});

