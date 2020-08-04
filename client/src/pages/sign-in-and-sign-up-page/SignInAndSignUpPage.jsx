import React from "react";
import "./SignInAndSignUpPage.scss";
import SingIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up fade-in">
      <SingIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
