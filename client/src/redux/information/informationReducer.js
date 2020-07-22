import InformationActionTypes from "./informationTypes";

const INITIAL_STATE = {
  informationItems: null,
  errorMessage: null,
};

const informationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InformationActionTypes.FETCH_INFORMATION_SUCCESS:
      return {
        ...state,
        informationItems: action.payload,
      };
    case InformationActionTypes.FETCH_INFORMATION_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default informationReducer;
