import CartActionTypes from "./cartTypes";

export const cartToggle = () => {
  return {
    type: CartActionTypes.CART_TOGGLE,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};
