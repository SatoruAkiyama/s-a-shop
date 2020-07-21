import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./Header.scss";

import logo from "../../assets/header-logo.png";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";

import { selectCurrentUser } from "../../redux/user/userSelector";
import { selectCartHidden } from "../../redux/cart/cartSelector";
import { signOutStart } from "../../redux/user/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  return (
    <div className="header">
      <div className="header-container">
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
            <Link
              to="/"
              className="option"
              onClick={() => dispatch(signOutStart())}
            >
              SIGN OUT
            </Link>
          ) : (
            <Link className="option" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    </div>
  );
};

export default Header;
