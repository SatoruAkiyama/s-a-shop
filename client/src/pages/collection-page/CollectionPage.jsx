import React from "react";
import { useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shopSelector";

import CollectionItem from "../../components/collection-item/CollectionItem";
import HeaderImage from "../../components/header-image/HeaderImage";

import headerImageData from "../../data/headerImageData";

import "./CollectionPage.scss";

const CollectionPage = ({ match }) => {
  const collection = useSelector((state) =>
    selectShopCollection(match.params.collectionId)(state)
  );
  const { title, items } = collection;
  const imageUrl = headerImageData;
  return (
    <>
      <HeaderImage imageUrl={imageUrl[title.toLowerCase()]}>
        <h1>{title.toUpperCase()}</h1>
      </HeaderImage>
      <div className="collection-page">
        <div className="items">
          {items.map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CollectionPage;
