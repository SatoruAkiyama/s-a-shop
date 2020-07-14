import ShopActionTypes from "./shopTypes";

export const updateCollections = (collectionsMap) => {
  return {
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
