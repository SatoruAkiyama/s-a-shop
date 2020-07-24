import React from "react";
import { useSelector } from "react-redux";

import { selectCurrentUserInfo } from "../../redux/user/userSelector";

import "./AccountInfo.scss";

const AccountInfo = () => {
  const accountInfo = useSelector(selectCurrentUserInfo);
  const { displayName, email, createdAt } = accountInfo;
  return (
    <div className="user-info">
      <h2 className="desc">Account Info</h2>
      <div className="displayName">
        {displayName ? (
          <>
            <h3>Display Name</h3>
            <p>{displayName}</p>
          </>
        ) : null}
      </div>
      <div className="email">
        <h3>Email</h3>
        <p>{email}</p>
      </div>
      <div className="createdAt">
        <h3>The date this account was created.</h3>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default AccountInfo;
