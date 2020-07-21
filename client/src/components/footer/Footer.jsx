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
            <Link className="option" to="/checkout">
              CHECKOUT
            </Link>
          </div>
        </div>
        <div className="footer__link">
          <span className="year">-2020</span>
          <div className="options link-collection">
            <Link className="option" to="/shop/womens">
              WOMENS
            </Link>
            <Link className="option" to="/shop/mens">
              MENS
            </Link>
            <Link className="option" to="/shop/shoes">
              SHOES
            </Link>
            <Link className="option" to="/shop/hats">
              HATS
            </Link>
            <Link className="option" to="/shop/bags">
              BAGS
            </Link>
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
