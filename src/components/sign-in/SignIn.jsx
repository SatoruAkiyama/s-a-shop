import React from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { signInWithGoogle } from "../../firebase/firebaseUtil";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have a account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.submit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="btn">
            <Button type="submit" value="Sign In" />
            <Button
              value="Sign In With Google"
              onClick={signInWithGoogle}
              isGoogleSignIn
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
