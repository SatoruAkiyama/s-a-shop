import React from "react";

import "./CartItem.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <div className="cal">
          <span className="quantityChange">+</span>
          <span className="quantityChange">-</span>
          <span className="quantityChange">x</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
