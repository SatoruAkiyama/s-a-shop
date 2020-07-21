import React from "react";
import { useSelector } from "react-redux";

import { selectShopCollectionsForPreview } from "../../redux/shop/shopSelector";

import CollectionPreview from "../collection-preview/CollectionPreview";
import HeaderImage from "../../components/header-image/HeaderImage";

import headerImageData from "../../data/headerImageData";

import "./CollectionOverview.scss";

const CollectionOverView = () => {
  const collections = useSelector(selectShopCollectionsForPreview);

  const imageUrl = headerImageData.collectionOverview;
  return (
    <>
      <HeaderImage imageUrl={imageUrl}>
        <h1>SHOP</h1>
      </HeaderImage>
      <div className="collection-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </>
  );
};

export default CollectionOverView;
