import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtil";
import logo from "../../assets/logo.jpg";
import { connect } from "react-redux";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <div className="logo">
          <img src={logo} alt="S&A" height="40px" width="40px" />
        </div>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        {currentUser ? (
          <Link to="/" className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/sing-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps)(Header);
