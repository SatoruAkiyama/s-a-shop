import InformationActionTypes from "./informationTypes";

export const fetchInformationStart = () => {
  return {
    type: InformationActionTypes.FETCH_INFORMATION_START,
  };
};

export const fetchInformationSuccess = (information) => {
  return {
    type: InformationActionTypes.FETCH_INFORMATION_SUCCESS,
    payload: information,
  };
};

export const fetchInformationFailure = (e) => {
  return {
    type: InformationActionTypes.FETCH_INFORMATION_FAILURE,
    payload: e,
  };
};
