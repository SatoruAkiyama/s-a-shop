import React from "react";

import "./PurchaseHistoryItem.scss";

const PurchaseHistoryItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="purchase-history-item">
      <div className="purchase-history-item__inner">
        <div className="purchase-history-item__image">
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <div className="purchase-history-item__name">
          <span>{name}</span>
        </div>
        <div className="purchase-history-item__price">
          <span>${price}</span>
        </div>
        <div className="purchase-history-item__quantity">
          <span>x{quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryItem;
