import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";
import { selectCurrentUserId } from "../../redux/user/userSelector";

import "./CheckoutPage.scss";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import StripeButton from "../../components/stripe-button/StripeButton";
import Button from "../../components/button/Button";
import Thanks from "../../components/thanks/Thanks";
import HeaderImage from "../../components/header-image/HeaderImage";
import Directory from "../../components/directory/Directory";

import headerImageData from "../../data/headerImageData";

const Checkout = () => {
  const [checkOutDone, setCheckout] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const currentUserId = useSelector(selectCurrentUserId);

  const { push } = useHistory();

  const imageUrl = headerImageData.checkout;

  return checkOutDone ? (
    <div className="fade-in">
      <Thanks />
    </div>
  ) : (
    <div className="fade-in">
      <HeaderImage imageUrl={imageUrl}>
        <h1>CHECKOUT</h1>
      </HeaderImage>
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
        {currentUserId ? (
          total > 0 ? (
            <>
              <div className="red">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 <br />
                -Exp: 07/20 - CVV: 123
              </div>
              <StripeButton price={total} setCheckout={setCheckout} />
            </>
          ) : null
        ) : (
          <div className="btn">
            <Button value="GO SIGN IN" onClick={() => push("/sign-in")} />
            <div className="red">*Please SIGN IN to buy items*</div>
          </div>
        )}
      </div>
      <div className="other-category">
        <h2>Explore more</h2>
        <Directory />
      </div>
    </div>
  );
};

export default Checkout;
