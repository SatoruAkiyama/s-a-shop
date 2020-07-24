import React from "react";

import { useSelector } from "react-redux";
import { selectCurrentUserPurchaseHistory } from "../../redux/user/userSelector";

import PurchaseHistoryItem from "../purchase-history-item/PurchaseHistoryItem";

import "./AccountHistory.scss";

const AccountHistory = () => {
  const purchaseHistoryItems = useSelector(selectCurrentUserPurchaseHistory);
  return (
    <div className="user-history">
      <h2 className="desc">Purchase History</h2>
      <div className="purchase-history">
        <div className="purchase-history_items">
          {purchaseHistoryItems.length ? (
            purchaseHistoryItems.map((purchaseHistoryItem, index) => (
              <PurchaseHistoryItem item={purchaseHistoryItem} key={index} />
            ))
          ) : (
            <div className="not-bought">
              <span className>You have not bought anything yet.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountHistory;
