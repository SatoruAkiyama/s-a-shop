import React from "react";
import StripeCheckout from "react-stripe-checkout";

import STRIPE_API_KEY from "../../api/STRIPE_API_KEY";
import logo from "../../assets/logo.jpg";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeApiKey = STRIPE_API_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful. Thank you!!");
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
