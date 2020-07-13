import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import "./CartDropdown.scss";

import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

import { selectCartItems } from "../../redux/cart/cartSelector";
import { cartToggle } from "../../redux/cart/cartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <span
        className="close"
        onClick={() => {
          dispatch(cartToggle());
        }}
      >
        X
      </span>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <div className="btn">
        {history.location.pathname === "/checkout" ? (
          <Button
            value="GO TO SHOP"
            onClick={() => {
              history.push("/shop");
              dispatch(cartToggle());
            }}
          />
        ) : (
          <Button
            value="GO TO CHECKOUT"
            onClick={() => {
              history.push("/checkout");
              dispatch(cartToggle());
            }}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
