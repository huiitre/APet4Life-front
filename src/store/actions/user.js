//* ACTION TYPE FORM_CONTACT_IS_OPEN
export const FORM_CONTACT_IS_OPEN = "FORM_CONTACT_IS_OPEN";
//* ACTION CREATOR formContactIsOpen
export const formContactIsOpen = () => ({
  type: FORM_CONTACT_IS_OPEN,
});

//* ACTION TYPE SET_TYPE_SIGNUP_FORM
export const SET_TYPE_SIGNUP_FORM = "SET_TYPE_SIGNUP_FORM";
//* ACTION CREATOR setTypeSignupForm
export const setTypeSignupForm = (userType) => ({
  type: SET_TYPE_SIGNUP_FORM,
  userType,
});

//* ACTION TYPE CHANGE_FORM_SIGNUP_STATUS
export const CHANGE_FORM_SIGNUP_STATUS = "CHANGE_FORM_SIGNUP_STATUS";
//* ACTION CREATOR changeFormSignupStatus
export const changeFormSignupStatus = (status) => ({
  type: CHANGE_FORM_SIGNUP_STATUS,
  status,
});

//todo action pour le formulaire d'inscription
//* ACTION TYPE SET_FIELD_VALUE_SIGNUP_FORM
export const SET_FIELD_VALUE_SIGNUP_FORM = "SET_FIELD_VALUE_SIGNUP_FORM";
//* ACTION CREATOR setFieldValueSignupForm
export const setFieldValueSignupForm = (value, name) => {
  return {
    type: SET_FIELD_VALUE_SIGNUP_FORM,
    value,
    name,
  };
};

//* ACTION TYPE SEND_SIGN_UP
export const SEND_SIGN_UP = 'SEND_SIGN_UP';
//* ACTION CREATOR sendSignUp
export const sendSignUp = () => ({
  type: SEND_SIGN_UP,
});

//! LOGIN !//
//* ACTION TYPE CHANGE_LOGIN_FORM_DISPLAY
export const CHANGE_LOGIN_FORM_DISPLAY = 'CHANGE_LOGIN_FORM_DISPLAY';
//* ACTION CREATOR changeLoginFormDisplay
export const changeLoginFormDisplay = () => ({
  type: CHANGE_LOGIN_FORM_DISPLAY,
});

//* ACTION TYPE SET_FIELD_VALUE_LOGIN_FORM
export const SET_FIELD_VALUE_LOGIN_FORM = 'SET_FIELD_VALUE_LOGIN_FORM';
//* ACTION CREATOR setFieldValueLoginForm
export const setFieldValueLoginForm = (value, name) => ({
  type: SET_FIELD_VALUE_LOGIN_FORM,
  value,
  name,
});

// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});



