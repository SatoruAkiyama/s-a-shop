import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(({ id, ...oterItemProps }) => (
          <CollectionItem key={id} {...oterItemProps} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
