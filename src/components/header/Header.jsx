import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./Header.scss";

import logo from "../../assets/logo.jpg";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { signOutStart } from "../../redux/user/userActions";

const Header = ({ currentUser, hidden, signOutStart }) => {
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
          <Link to="/" className="option" onClick={signOutStart}>
            SIGN OUT
          </Link>
        ) : (
          <Link className="option" to="/sing-in">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
