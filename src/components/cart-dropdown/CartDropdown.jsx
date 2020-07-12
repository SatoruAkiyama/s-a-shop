import React from "react";
import "./CartDropdown.scss";
import Button from "../button/Button";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <div className="btn">
        <Button value="GO TO CHECKOUT" />
      </div>
    </div>
  );
};

export default CartDropdown;
