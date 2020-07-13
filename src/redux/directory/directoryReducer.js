import DIRECTORY_DATA from "../../data/directoryData";

const INITIAL_STATE = {
  sections: DIRECTORY_DATA,
};

const direcotryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default direcotryReducer;
