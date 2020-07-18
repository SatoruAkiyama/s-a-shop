import React from "react";

import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";

import Button from "../button/Button";

import "./CollectionItem.scss";

const CollectionItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        value="ADD TO CART"
        inverted
        onClick={() => dispatch(addItem(item))}
      />
    </div>
  );
};

export default CollectionItem;
