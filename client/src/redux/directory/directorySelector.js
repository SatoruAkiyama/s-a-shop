import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = (collectionId) =>
  createSelector([selectDirectory], (directory) =>
    directory.sections.filter((section) => {
      return collectionId ? section.title !== collectionId : section;
    })
  );
