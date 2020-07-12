import React from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import cartToggle from "../../redux/cart/cartActions";

const CartIcon = ({ cartToggle }) => {
  return (
    <div className="cart-icon" onClick={cartToggle}>
      <ShoppingBagIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  cartToggle: () => dispatch(cartToggle()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
