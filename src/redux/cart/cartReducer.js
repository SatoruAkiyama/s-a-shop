import CartActionTypes from "./cartTypes";
import { addItemToCart } from "./cartUtil";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
