import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import STRIPE_API_KEY from "../../api/STRIPE_API_KEY";
import logo from "../../assets/logo.jpg";

import { selectCartItems } from "../../redux/cart/cartSelector";

import { addItemToHistory } from "../../redux/user/userActions";

const StripeButton = ({ price, setCheckout }) => {
  const priceForStripe = price * 100;
  const stripeApiKey = STRIPE_API_KEY;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const onToken = (token) => {
    axios({
      url: "/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        dispatch(addItemToHistory(cartItems));
      })
      .then(() => {
        setCheckout(true);
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure to use the provided credit card data"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="S&A inc."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={stripeApiKey}
    />
  );
};

export default StripeButton;
