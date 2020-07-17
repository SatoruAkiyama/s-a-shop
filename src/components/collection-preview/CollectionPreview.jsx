import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import "./CollectionPreview.scss";

import CollectionItem from "../collection-item/CollectionItem";
import Button from "../button/Button";

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <div className="collection-preview">
      <div className="collection-title">
        {" "}
        <h1 onClick={() => history.push(`${pathname}/${routeName}`)}>
          {title.toUpperCase()}
        </h1>
      </div>

      <div className="preview">
        {items.slice(0, 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
      <div className="btn">
        <Button
          value="MORE"
          inverted
          onClick={() => history.push(`${pathname}/${routeName}`)}
        />
      </div>
    </div>
  );
};

export default CollectionPreview;
