import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { selectCurrentUserName } from "../../redux/user/userSelector";
import { signOutStart } from "../../redux/user/userActions";

import HeaderImage from "../../components/header-image/HeaderImage";
import AccountInfo from "../../components/account-info/AccountInfo";
import AccountHitory from "../../components/account-hisotry/AccountHistory";
import Directory from "../../components/directory/Directory";
import Button from "../../components/button/Button";

import headerImageData from "../../data/headerImageData";

import "./AccountPage.scss";

const AccountPage = () => {
  const dispatch = useDispatch();
  const accountName = useSelector(selectCurrentUserName);
  const history = useHistory();
  const imageUrl = headerImageData.account;

  return (
    <>
      <HeaderImage imageUrl={imageUrl}>
        <h1>Account</h1>
      </HeaderImage>
      <div className="account-page">
        <h1 className="hello">Hello {accountName}</h1>
        <div className="account-info">
          <AccountInfo />
        </div>
        <div className="signout-btn">
          <Button
            value="SIGN OUT"
            onClick={() => {
              dispatch(signOutStart());
              history.push("/");
            }}
          />
        </div>
        <div className="account-history">
          <AccountHitory />
        </div>
        <div className="go-shopping">
          <h2 className="desc">Let's go shopping</h2>
          <Directory />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
