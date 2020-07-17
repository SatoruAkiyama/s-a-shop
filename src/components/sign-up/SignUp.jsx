import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signUpStart } from "../../redux/user/userActions";
import { selectSignUpErrorMessage } from "../../redux/user/userSelector";

import "./SignUp.scss";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

const SignUp = ({ signUpStart, signInErrorMesssage }) => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpStart(userInfo);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I don't have account</h2>
      <span>Sign up with your email and password</span>
      <form className="sing-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <span className="error-message">{signInErrorMesssage}</span>
        <div className="btn">
          <Button type="submit" value="Sign up" />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  signInErrorMesssage: selectSignUpErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
