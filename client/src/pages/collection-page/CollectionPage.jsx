import React from "react";
import { useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shopSelector";

import CollectionItem from "../../components/collection-item/CollectionItem";
import HeaderImage from "../../components/header-image/HeaderImage";
import Directory from "../../components/directory/Directory";

import headerImageData from "../../data/headerImageData";

import "./CollectionPage.scss";

const CollectionPage = ({ match }) => {
  const collection = useSelector((state) =>
    selectShopCollection(match.params.collectionId)(state)
  );
  const { title, items } = collection;
  const imageUrl = headerImageData;
  return (
    <div className="fade-in">
      <HeaderImage imageUrl={imageUrl[title.toLowerCase()]}>
        <h1>{title.toUpperCase()}</h1>
      </HeaderImage>
      <div className="collection-page">
        <div className="items">
          {items.map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
        </div>
        <div className="other-category">
          <h2>Explore more</h2>
          <Directory />
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
