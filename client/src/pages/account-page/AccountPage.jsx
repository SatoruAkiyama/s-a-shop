import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  selectCurrentUserInfo,
  selectCurrentUserPurchaseHistory,
} from "../../redux/user/userSelector";
import { signOutStart } from "../../redux/user/userActions";

import HeaderImage from "../../components/header-image/HeaderImage";
import AccountInfo from "../../components/account-info/AccountInfo";
import AccountHitory from "../../components/account-hisotry/AccountHistory";
import Button from "../../components/button/Button";

import headerImageData from "../../data/headerImageData";

import "./AccountPage.scss";

const AccountPage = () => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectCurrentUserInfo);
  const purchaseHistory = useSelector(selectCurrentUserPurchaseHistory);
  const history = useHistory();
  const imageUrl = headerImageData.account;

  const accountName = accountInfo.displayName.toUpperCase();
  return (
    <>
      <HeaderImage imageUrl={imageUrl}>
        <h1>Account</h1>
      </HeaderImage>
      <div className="account-page">
        <h1 className="hello">Hello {accountName}</h1>
        <div className="account-info">
          <AccountInfo accountInfo={accountInfo} />
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
          <AccountHitory purchaseHistoryItems={purchaseHistory} />
        </div>
      </div>
    </>
  );
};

export default AccountPage;
