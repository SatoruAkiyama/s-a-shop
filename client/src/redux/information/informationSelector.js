import { createSelector } from "reselect";

const selectInformation = (state) => state.information;

export const selectInformationItems = createSelector(
  [selectInformation],
  (information) => (information ? information.informationItems : null)
);
