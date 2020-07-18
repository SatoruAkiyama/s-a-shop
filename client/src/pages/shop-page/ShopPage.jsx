import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/CollectionOverviewContainer";
import CollectionPageContainer from "../collection-page/CollectionPageContainer";

import { fetchCollectionsStart } from "../../redux/shop/shopActions";

const ShopPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};
export default ShopPage;
