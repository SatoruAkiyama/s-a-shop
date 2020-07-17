import React from "react";
import { useSelector } from "react-redux";

import { selectShopCollectionsForPreview } from "../../redux/shop/shopSelector";

import CollectionPreview from "../collection-preview/CollectionPreview";

import "./CollectionOverview.scss";

const CollectionOverView = () => {
  const collections = useSelector(selectShopCollectionsForPreview);
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionOverView;
