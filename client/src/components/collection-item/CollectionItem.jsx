import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addItem } from "../../redux/cart/cartActions";

import Button from "../button/Button";

import "./CollectionItem.scss";

const CollectionItem = ({ item }) => {
  const [added, setAdded] = useState(false);
  const handleAdded = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 500);
  };

  const { name, imageUrl, price } = item;
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className={`${added ? "added" : ""} addedShow fast-fade-in`}>
        <span>Added!</span>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button
        value="ADD TO CART"
        inverted
        onClick={() => {
          dispatch(addItem(item));
          handleAdded();
        }}
      />
    </div>
  );
};

export default CollectionItem;
