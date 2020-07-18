import React from "react";

import { useDispatch } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cartActions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(clearItem(cartItem))}
      >
        x
      </span>
    </div>
  );
};

export default CheckoutItem;
