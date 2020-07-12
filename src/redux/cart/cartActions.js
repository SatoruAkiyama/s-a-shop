import CartActionTypes from "./cartTypes";

const cartToggle = () => {
  return {
    type: CartActionTypes.CART_TOGGLE,
  };
};

export default cartToggle;
