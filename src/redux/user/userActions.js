import UserActionTypes from "./userTypes";

const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export default setCurrentUser;
