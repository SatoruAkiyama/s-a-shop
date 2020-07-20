import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useSelector } from "react-redux";

import STRIPE_API_KEY from "../../api/STRIPE_API_KEY";
import logo from "../../assets/logo.jpg";

import { selectCartItems } from "../../redux/cart/cartSelector";
import { selectCurrentUserId } from "../../redux/user/userSelector";
import { addPurchaseHistory } from "../../firebase/firebaseUtil";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const stripeApiKey = STRIPE_API_KEY;
  const items = useSelector(selectCartItems);
  const currentUserId = useSelector(selectCurrentUserId);

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
      .then(() => {
        addPurchaseHistory(items, currentUserId);
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
