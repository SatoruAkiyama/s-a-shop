import React from "react";
import { useDispatch } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";

import "./CartItem.scss";

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={imageUrl} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <div className="cal">
          <span
            className="quantityChange"
            onClick={() => dispatch(addItem(item))}
          >
            +
          </span>
          <span
            className="quantityChange"
            onClick={() => dispatch(removeItem(item))}
          >
            -
          </span>
          <span
            className="quantityChange"
            onClick={() => dispatch(clearItem(item))}
          >
            x
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartItem);
