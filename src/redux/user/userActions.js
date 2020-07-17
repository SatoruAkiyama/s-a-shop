import UserActionTypes from "./userTypes";

export const googleSignInStart = () => {
  return {
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
  };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};

export const signInSuccess = (user) => {
  return {
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};

export const signInFailure = (e) => {
  return {
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: e,
  };
};

export const checkUserSession = () => {
  return {
    type: UserActionTypes.CHECK_USER_SESSION,
  };
};

export const signOutStart = () => {
  return {
    type: UserActionTypes.SIGN_OUT_START,
  };
};

export const signOutSuccess = () => {
  return {
    type: UserActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (e) => {
  return {
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: e,
  };
};

export const signUpStart = (userInfo) => {
  return {
    type: UserActionTypes.SIGN_UP_START,
    payload: userInfo,
  };
};

export const signUpSuccess = () => {
  return {
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: "Success!",
  };
};

export const signUpFailure = (e) => {
  return {
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload: e,
  };
};
