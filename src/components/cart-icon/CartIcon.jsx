import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CartIcon.scss";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { cartToggle } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  return (
    <div className="cart-icon" onClick={() => dispatch(cartToggle())}>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
