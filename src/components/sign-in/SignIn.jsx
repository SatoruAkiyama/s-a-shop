import React from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebaseUtil";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
        errorMessage: "",
      });
    } catch (e) {
      this.setState({
        errorMessage: "Password don't match!",
      });
      console.log(e);
    }
  };
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password, errorMessage } = this.state;
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
