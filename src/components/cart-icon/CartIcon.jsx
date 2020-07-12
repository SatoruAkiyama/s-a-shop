import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./CartIcon.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { cartToggle } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

const CartIcon = ({ cartToggle, itemCount }) => {
  return (
    <div className="cart-icon" onClick={cartToggle}>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  cartToggle: () => dispatch(cartToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
