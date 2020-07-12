import { UserActionTypes } from "./userTypes";

const INITiAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITiAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
