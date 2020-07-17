import React from "react";
import { useSelector } from "react-redux";

import { selectShopCollection } from "../../redux/shop/shopSelector";

import CollectionItem from "../../components/collection-item/CollectionItem";

import "./CollectionPage.scss";

const CollectionPage = ({ match }) => {
  const collection = useSelector((state) =>
    selectShopCollection(match.params.collectionId)(state)
  );
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
