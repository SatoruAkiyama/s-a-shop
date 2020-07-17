import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./SignIn.scss";

import FormInput from "../form-input/FormInput";
import Button from "../button/Button";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";
import { selectErrorMessage } from "../../redux/user/userSelector";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart, errorMessage } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have a account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <span className="error-message">{errorMessage}</span>
          <div className="btn">
            <Button type="submit" value="Sign In" />
            <Button
              type="button"
              value="Sign In With Google"
              onClick={googleSignInStart}
              isGoogleSignIn
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
