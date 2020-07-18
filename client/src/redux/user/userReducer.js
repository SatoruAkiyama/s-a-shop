import UserActionTypes from "./userTypes";

const INITiAL_STATE = {
  currentUser: null,
  errorMessage: null,
  signUpErrorMessage: null,
};

const userReducer = (state = INITiAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        signUpErrorMessage: null,
      };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpErrorMessage: action.payload,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpErrorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
