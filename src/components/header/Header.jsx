import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <div className="logo">
          <img src={logo} alt="S&A" height="40px" width="40px" />
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/sing-in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};
export default Header;
