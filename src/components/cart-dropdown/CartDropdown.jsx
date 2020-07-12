import React from "react";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelector";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <div className="btn">
        <Button value="GO TO CHECKOUT" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
