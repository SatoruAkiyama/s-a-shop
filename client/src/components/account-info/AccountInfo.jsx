import React from "react";

import "./AccountInfo.scss";

const AccountInfo = ({ accountInfo: { displayName, email, createdAt } }) => {
  console.log(displayName, email, createdAt);
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
