import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/userSelector";
import { signOutStart } from "../../redux/user/userActions";

import "./Footer.scss";

const Footer = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__link">
          <Link to="/" className="name">
            S&A
          </Link>
          <div className="options link">
            <div className="option">
              <Link to="/">HOME</Link>
            </div>
            <div className="option">
              <Link to="/shop">SHOP</Link>
            </div>
            <div className="option">
              <Link to="/account">ACCOUNT</Link>
            </div>
            <div className="option">
              {currentUser ? (
                <Link to="/" onClick={() => dispatch(signOutStart())}>
                  SIGN OUT
                </Link>
              ) : (
                <Link to="/sign-in">SIGN IN</Link>
              )}
            </div>
            <div className="option">
              <Link to="/checkout">CHECKOUT</Link>
            </div>
          </div>
        </div>
        <div className="footer__link">
          <span className="year">-2020</span>
          <div className="options link-collection">
            <div className="option">
              <Link to="/shop/womens">WOMENS</Link>
            </div>
            <div className="option">
              <Link to="/shop/mens">MENS</Link>
            </div>
            <div className="option">
              <Link to="/shop/shoes">SHOES</Link>
            </div>
            <div className="option">
              <Link to="/shop/hats">HATS</Link>
            </div>
            <div className="option">
              <Link to="/shop/bags">BAGS</Link>
            </div>
          </div>
        </div>
        <div className="satoru">
          <a href="https://satoruakiyama.com">&copy;Satoru Akiyama</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
