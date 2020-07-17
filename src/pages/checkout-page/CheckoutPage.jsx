import React from "react";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../redux/cart/cartSelector";
import { selectCartTotal } from "../../redux/cart/cartSelector";

import "./CheckoutPage.scss";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
      {total > 0 ? (
        <>
          <div className="test-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 <br />
            -Exp: 07/20 - CVV: 123
          </div>
          <StripeButton price={total} />
        </>
      ) : null}
    </div>
  );
};

export default Checkout;
