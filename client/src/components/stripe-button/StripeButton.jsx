import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import STRIPE_API_KEY from "../../api/STRIPE_API_KEY";
import logo from "../../assets/logo.jpg";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeApiKey = STRIPE_API_KEY;

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
        alert("Succesful Payment! Thank You!");
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
