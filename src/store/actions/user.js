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
/* //* ACTION TYPE SET_MAIL_SIGNUP_FORM
export const SET_MAIL_SIGNUP_FORM = 'SET_MAIL_SIGNUP_FORM';
//* ACTION CREATOR setMailSignupForm
export const setMailSignupForm = (mail) => ({
  type: SET_MAIL_SIGNUP_FORM,
  mail,
});

//* ACTION TYPE SET_PASSWORD_SIGNUP_FORM
export const SET_PASSWORD_SIGNUP_FORM = 'SET_PASSWORD_SIGNUP_FORM';
//* ACTION CREATOR setPasswordSignupForm
export const setPasswordSignupForm = (password) => ({
  type: SET_PASSWORD_SIGNUP_FORM,
  password,
});

//* ACTION TYPE SET_PASSWORD_CONFIRM_SIGNUP_FORM
export const SET_PASSWORD_CONFIRM_SIGNUP_FORM = 'SET_PASSWORD_CONFIRM_SIGNUP_FORM';
//* ACTION CREATOR setPasswordConfirmSignupForm
export const setPasswordConfirmSignupForm = (passwordConfirm) => ({
  type: SET_PASSWORD_CONFIRM_SIGNUP_FORM,
  passwordConfirm,
});

//* ACTION TYPE SET_REGION_SIGNUP_FORM
export const SET_REGION_SIGNUP_FORM = 'SET_REGION_SIGNUP_FORM';
//* ACTION CREATOR setRegionSignupForm
export const setRegionSignupForm = (region) => ({
  type: SET_REGION_SIGNUP_FORM,
  region,
}); */

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
