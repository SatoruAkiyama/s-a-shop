import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { signUpStart } from "../../redux/user/userActions";
import { selectSignUpErrorMessage } from "../../redux/user/userSelector";

import "./SignUp.scss";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        errorMessage: "Password don't match!",
      });
      return;
    } else {
      this.setState({
        errorMessage: "",
      });
      signUpStart(displayName, email, password);
    }
  };

  render() {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      errorMessage,
    } = this.state;
    const { signInErrorMesssage } = this.props;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have account</h2>
        <span>Sign up with your email and password</span>
        <form className="sing-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <span className="error-message">{errorMessage}</span>
          <span className="error-message">{signInErrorMesssage}</span>
          <div className="btn">
            <Button type="submit" value="Sign up" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  signInErrorMesssage: selectSignUpErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (displayName, email, password) =>
    dispatch(signUpStart({ displayName, email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
