import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./SignIn.scss";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";
import { selectErrorMessage } from "../../redux/user/userSelector";

const SignIn = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const { email, password } = userInfo;

  const dispatch = useDispatch();

  const errorMessage = useSelector(selectErrorMessage);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart(userInfo));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have a account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <span className="error-message">{errorMessage}</span>
        <div className="btn">
          <Button type="submit" value="Sign In" />
          <Button
            type="button"
            value="Sign In With Google"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
