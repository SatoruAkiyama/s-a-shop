import React from "react";
import "./Button.scss";

const Button = ({ isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`button ${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } `}
      {...otherProps}
    >
      {otherProps.value}
    </button>
  );
};

export default Button;
